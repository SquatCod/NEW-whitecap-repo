import React, { useState, useEffect } from 'react'
import '../../styles/FilesView.css'

import FileItem from './FileItem'

import { db } from '../../firebase'

const FilesView = () => {
    const [files, setFiles] = useState([])

    useEffect(() => {
        db.collection('myFiles').onSnapshot(snapshot => {
            setFiles(snapshot.docs.map(doc => ({
                id: doc.id,
                item: doc.data()
            })))
        })
    }, [])

    console.log(files)

    return (
        <div className='fileView'>
            <div className="fileView__header">
               <b>Welcome to the ROV3D data upload site.<br/> 
               To add a file, click the "+ New" icon in the top left of the window.<br/><br/>
               If you try to open a file in the recent files section<br/>and you receive an error, it is because<br/>that file has been removed from the database.<br/></b>
            </div>
            <div className="fileView__titles">
                <div className="fileView__titles--left">
                    <p>Name:</p>
                </div>

                <div className="fileView__titles--middle">
                    Recent File Submissions
                </div>

                <div className="fileView__titles--right">
                    <p>Last modified:</p>
                    <p>File size:</p>
                </div>
            </div>
            {
                files.map(({ id, item }) => (
                    <FileItem id={id} caption={item.caption} timestamp={item.timestamp} fileUrl={item.fileUrl} size={item.size} />
                ))
            }
        </div>
    )
}

export default FilesView;