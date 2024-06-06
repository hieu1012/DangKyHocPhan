export const actionDEPOSIT  = (amount) => ({ type: "DEPOSIT", payload: amount });
export const actionWITHDRAW =  (amount) => ({ type: "WITHDRAW", payload: amount });


// export function actionDEPOSIT(payload) {
//     return {
//         type: 'DEPOSIT',
//         payload
//     }
// }

// export function actionWITHDRAW(payload) {
//     return {
//         type: 'WITHDRAW',
//         payload
//     }
// }