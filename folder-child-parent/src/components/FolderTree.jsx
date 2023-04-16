import React, { useState } from "react";
import '../App.css'
import initialFolders from "../folder";
import {Collapse} from 'react-collapse';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';

const FolderTree = ({ folders }) => {
    const [selectedFolders, setSelectedFolders] = useState([]);
    const [P_id , setId] = useState(null)
    let parentSaveId;
    const [open, setOpen] = useState(false);
    // const [collapseFolderId , SetcollapseFolderId] = useState(null)

  
    const handleCollapseClickOn =(folderId)=>{
      setOpen(true)
      SetcollapseFolderId(folderId)
    }

    const handleCollapseClickOff =(folderId)=>{
      setOpen(false)
      SetcollapseFolderId(folderId)
    }


  
    const handleFolderSelect = (folderId, isSelected) => {
      const newSelectedFolders = [...selectedFolders];
      const index = newSelectedFolders.indexOf(folderId);
    
      if (isSelected && index === -1) {
        newSelectedFolders.push(folderId);
      } else if (!isSelected && index !== -1) {
        newSelectedFolders.splice(index, 1);
      }
    
      const folder = folders.find((f) => f.id === folderId);
    
      // If the folder has children, select or deselect them as well
      if (folder && folder.children && folder.children.length > 0) {
        folder.children.forEach((child) => {
          const childIndex = newSelectedFolders.indexOf(child.id);
          if (isSelected && childIndex === -1) {
            newSelectedFolders.push(child.id);
          } else if (!isSelected && childIndex !== -1) {
            newSelectedFolders.splice(childIndex, 1);
          }
        });
      }
  
      function extractFoldersData(folders) {
        let parentIds = [];
        let childIds = [];
        let folderMap = {};
      
        folders.forEach((folder) => {
          const parent = folder.id;
          const children = folder.children.map((child) => child.id);
      
          parentIds.push(parent);
          childIds = [...childIds, ...children];
          folderMap[parent] = children;
        });
      
        console.log(folderMap)
        return { parentIds, childIds, folderMap };
      }
      
      const { parentIds, childIds, folderMap } = extractFoldersData(initialFolders);
      
      function findParentId(childId) {
        const parentIds = Object.keys(folderMap);
      
        for (let i = 0; i < parentIds.length; i++) {
          const parentId = parentIds[i];
          const children = folderMap[parentId];
    
          if (children.includes(childId)) {
            // console.log(parentId)
            return parentId;
          }
        }
        return null;
      }
      
      // console.log(folderMap)
      console.log(findParentId(folderId)); 
      parentSaveId=findParentId(folderId)
      // console.log(parentSaveId)
      setId(parentSaveId)
    console.log(`save data : ${P_id}`)
      setSelectedFolders(newSelectedFolders);





      //
      // console.log(`ParentID : ${parentIds[0]}`)
      // console.log(`map ::${folderMap[P_id].includes(6)}`)
      // // setIndeterminate(false);
    };
  
    console.log(`save : ${P_id}`)
  
    const renderFolder = (folder) => {
      const isSelected = selectedFolders.includes(folder.id);
      const hasChildren = folder.children.length > 0;
      console.log(parentSaveId)
      console.log(`Done with dd${P_id}`)
      

  
      return (
        <div className="Label"  key={folder.id}>
          <label >
            <input type="checkbox" checked={isSelected} ref={(input) => {
            if (input) {
              input.indeterminate = (isSelected===false && hasChildren && selectedFolders.length >0 && P_id == folder.id );
            }
          }}onChange={(e) => handleFolderSelect(folder.id, e.target.checked)} />
            {folder.name} 
          </label>
          { hasChildren && (open===false ?<ExpandLessIcon onClick={()=>handleCollapseClickOn(folder.id)}/>:<ExpandMoreIcon onClick={()=>handleCollapseClickOff(folder.id)}/>)}
          
          
          {hasChildren && (
            <Collapse isOpened={collapseFolderId==folder.id && open} >
              {folder.id}
            <div style={{ marginLeft: "20px" }}>
              {folder.children.map((child) => renderFolder(child))}
            </div>
            </Collapse>
          )}
          
        </div>
      );
    };
    
  
    return (
      <div>
        {folders.map((folder) => renderFolder(folder))}
      </div>
    );
  };


  export default FolderTree