import React, { useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {Grid,Modal,TextField,Button} from '@material-ui/core';
import folder from '../images/folder.png';
import upload from '../images/upload.png';
import InsideFolderPage from './InsideFolderPage';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
  control: {
    padding: theme.spacing(2),
  },
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
}));


export default function FolderPage() {
    let newFolderName=""
  const [spacing, setSpacing] = useState(2);
  const [folderCount,setFolder] = useState(["folder1","folder2","folder3"])
  const [insideFolder,setInsideFolder] = useState([])
  const [modalOpen,modalOpenFunction] = useState(false)
  const [insideFolderClicked,insideFolderClickedFunction] = useState(false)
  const [nameOfFolderClicked,nameOfFolderClickedFunction] = useState("")

  
  
  const classes = useStyles();


  let addFolderName = (e) =>{
    newFolderName=e.target.value
  }

  let uploadBox = () =>{
      console.log("upload")
    modalOpenFunction(true)
  }
  let closeModal = () =>{
    modalOpenFunction(false)
  }
   let addFolder = () =>{
    setFolder([...folderCount,newFolderName])
    modalOpenFunction(false)
   }
  let createInsideFolder = (value) =>{
    insideFolderClickedFunction(true)
    nameOfFolderClickedFunction(value)
  }


  return (
      <div>
          <h2>Folders</h2>
    <Grid container className={classes.root} spacing={2}>
      <Grid item xs={12}>
        <Grid container justify="center" spacing={spacing}>
          {folderCount.map((value) => (
            <Grid key={value} item>
              <img src={folder} alt=""  />
          <h3 onClick={()=>createInsideFolder(value)}>{value}</h3>
            </Grid>
          ))}
         <img src={upload} alt="" onClick={()=>uploadBox()}/>
        </Grid>
      </Grid>
    </Grid>
    <Modal
    open={modalOpen}
    onClose={()=>closeModal()}
  aria-labelledby="modal-title"
  aria-describedby="modal-description"
  className={classes.modal}
><div  className={classes.paper}>
  
  <TextField id="modal-title" label="User Id" onChange={(e)=>addFolderName(e)}/>
  <br/><br/>
  <Button id = "modal-description" variant="contained" color="primary" onClick={()=>addFolder()}>
Create Folder
</Button>
  </div>
</Modal>
<br/>
{insideFolderClicked==true?<InsideFolderPage folderNameClicked={nameOfFolderClicked}/>:""}
    </div>
  );
}
