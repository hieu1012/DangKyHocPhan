import { useEffect, useState } from "react";
export default function Home() {
    const [tmp, setTmp] = useState(10)
    const [res, setRes] = useState(true)
    const [oldPass, setOldPass] = useState("1");
    const [newPass, setNewPass] = useState("1")
    useEffect(() => {
        compare();
    }, [oldPass, newPass]);

    function compare(t1,t2) {
        if (oldPass===newPass)
            setRes(true)
        else 
            setRes(false);    
    }
    
    return (
        <div>        
            <p>Home</p>
            <div >{tmp}</div>            
            <button onClick={()=>setTmp(tmp+1)}>button</button>   

            {/* <input type="text" value={oldPass} onChange={(e)=>{
                setOldPass(e.target.value)
                compare(e.target.value, newPass);
            }}>
            </input>
            
            <input type="text" value={newPass} onChange={(e)=>{
                setNewPass(e.target.value)
                compare(oldPass,e.target.value);
            }}>
            </input> */}
             <input
                type="text"
                value={oldPass}
                onChange={(e) => setOldPass(e.target.value)}
            />
            <input
                type="text"
                value={newPass}
                onChange={(e) => setNewPass(e.target.value)}
            />

            <div>{res ? "true" : "false"}</div>
            
                 
        </div>                           
    );
}