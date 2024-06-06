import {useDispatch, useSelector } from "react-redux";
import { actionDEPOSIT, actionWITHDRAW } from "../redux/action";
export default function Blogs() {
    var count = useSelector(state => state.count);
    var dispatch = useDispatch();
    return (
            <nav>
                <h1 id="output">Blogs</h1>
                <div>{count}</div>
                <button id="deposit" onClick={()=>dispatch(actionDEPOSIT(10))}>Deposit $10</button>
                <button id="withdraw" onClick={()=>dispatch(actionWITHDRAW(10))}>Withdraw $10</button>
            </nav>
    );
}