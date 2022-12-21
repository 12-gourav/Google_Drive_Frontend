import axios from "axios";
import { toast } from "react-toastify";

// name,email,password,age,gender,contact,address,dob,pic

export const RegisterUser = async (formdata)=>{
try {

    return await axios.post("http://localhost:5000/api/v1/register-user",formdata,{headers:{
        "Content-Type":"multipart/form-data",
       
    }})
   
} catch (error) {
    console.log(error);
    toast.error(error.response.data.error);
}
}

export const RegisterSubUser = async (myForm,token)=>{
    try {
    
        return await axios.post("http://localhost:5000/api/v1/register-sub-user",myForm,{headers:{
            "Content-Type":"multipart/form-data",
            token:token
            
           
        }})
       
    } catch (error) {
        console.log(error);
        toast.error(error.response.data.error);
    }
    }



export const LoginUser = async (email,password,role)=>{
    try {
    
        return await axios.post("http://localhost:5000/api/v1/login",{email,password,role});
       
    } catch (error) {
        console.log(error);
        toast.error(error.response.data.error);
    }
    }

    export const LoadUser = async (token)=>{
        try {
        
            return await axios.post("http://localhost:5000/api/v1/load",{},{
                headers:{
                    token:token
                }
            });
           
        } catch (error) {
            console.log(error);
       
        } }



 export const UpdateSubUser = async (token,id,name,email,password,contact)=>{
            try {
            
                return await axios.put("http://localhost:5000/api/v1/update",
                {id,name,email,password,contact},{
                    headers:{
                        token:token
                    }
                });
               
            } catch (error) {
                console.log(error);
           
            } }


// export const DeleteSubUser = async (token,id)=>{
//                 try {
//                     console.log("id",id);
                
//     return await axios.delete("http://localhost:5000/api/v1/delete",{id},{headers:{token:token}});
                   
//                 } catch (error) {
//                     console.log(error);
               
//                 } }

export const LogoutUser = async (token)=>{
                try {
                   
    return await axios.post("http://localhost:5000/api/v1/logout",{headers:{token:token}});
                   
                } catch (error) {
                    console.log(error);
               
    } }


////upload media files

export const UploadMedia = async(token,myForm)=>{
    
    try {
        
        return await axios.post("http://localhost:5000/api/v1/upload-media",myForm,
        {headers:{token:token, "Content-Type":"multipart/form-data",}});
    } catch (error) {
        toast.error(error.response.data.error);
        console.log(error);
    }
}
export const RemovedMedia = async(token,picid,public_id,limit)=>{
    
    try {
        console.log(token);
        return await axios.post("http://localhost:5000/api/v1/delete-media",{picid,public_id,limit},
        {headers:{token:token}});
    } catch (error) {
        toast.error(error.response.data.error);
        console.log(error);
    }
}

export const UploadVideo = async(token,public_id,url,type,title,limit,fileSize)=>{
    
    try {
        
        return await axios.post("http://localhost:5000/api/v1/upload-video"
        ,{public_id,url,type,title,limit,fileSize},
        {headers:{token:token, "Content-Type":"multipart/form-data",}});
    } catch (error) {
        toast.error(error.response.data.error);
        console.log(error);
    }
}

export const RemovedVideo = async(token,picid,public_id,limit)=>{
    
    try {
        console.log(token);
        return await axios.post("http://localhost:5000/api/v1/delete-video",{picid,public_id,limit},
        {headers:{token:token}});
    } catch (error) {
        toast.error(error.response.data.error);
        console.log(error);
    }
}

export const UploadDoc = async(token,public_id,url,type,title,limit,fileSize)=>{
    
    try {
        
        return await axios.post("http://localhost:5000/api/v1/upload-doc"
        ,{public_id,url,type,title,limit,fileSize},
        {headers:{token:token, "Content-Type":"multipart/form-data",}});
    } catch (error) {
        toast.error(error.response.data.error);
        console.log(error);
    }
}

export const RemovedDoc = async(token,picid,public_id,limit)=>{
    
    try {
        console.log(token);
        return await axios.post("http://localhost:5000/api/v1/delete-doc",{picid,public_id,limit},
        {headers:{token:token}});
    } catch (error) {
        toast.error(error.response.data.error);
        console.log(error);
    }
}
export const DeleteSubUser = async (token,id) =>{
    try {
        return await axios.post("http://localhost:5000/api/v1/delete-sub-user",{id},
        {headers:{token:token}});
    } catch (error) {
        toast.error(error.response.data.error);
        console.log(error);
    }
}

export const CreateFeedback = async (token,id,name,feedback,avtar) =>{
    try {
        return await axios.post("http://localhost:5000/api/v1/feedback",{id,name,feedback,avtar},
        {headers:{token:token}});
    } catch (error) {
        toast.error(error.response.data.error);
        console.log(error);
    }
}

export const GetFeedback = async () =>{
    try {
        return await axios.get("http://localhost:5000/api/v1/feedback");
    } catch (error) {
        toast.error(error.response.data.error);
        console.log(error);
    }
}