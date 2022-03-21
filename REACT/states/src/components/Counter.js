// import { useState } from "react";
// function Counter() {
//     const [count, setCount] = useState(0);
    
//     // Alternatif - Function seklinde.
//     const increase = () => {
//         setCount(count + 1);
//     }
//     return (
//         <div>
//             <h1>{count}</h1>
//             <button onClick={() => setCount(count - 1)}>Decrease</button>
//             <button onClick={increase}>Increase</button>

//         </div>
//     );
// }

// 2 - Re-Render
// React vs. jQuery
import { useState } from "react";
function Counter() {
    const [count, setCount] = useState(0);
    
    // Alternatif - Function seklinde.
    const increase = () => {
        setCount(1);
    }
    return (
        <div>
            <h1>{count}</h1>
            <button onClick={() => setCount(count - 1)}>Decrease</button>
            <button onClick={increase}>Increase</button>

        </div>
    );
}

// More Tools - Rendering - Paint flashing (Ekranda render edilen alanlari bir isik yakarak bize gosterir.)
// increase butonuna basildiginda DOM yeniden render edilmez. Cunku 1 degeri degismiyor(state degeri degismiyor).(Virtual DOM)
// Ama jQuery de tum DOM render edilir. 
// gereksiz Render larin onune gecmek
export default Counter;