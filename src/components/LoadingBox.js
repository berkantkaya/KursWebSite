import React from 'react'
import { CircularProgress,progress } from '@material-ui/core';

export default function LoadingBox() {
    return (
        <div className="loadingbox text-center mt-4">
           <CircularProgress color="primary" />
        </div>
    )
}
