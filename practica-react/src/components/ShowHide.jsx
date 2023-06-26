import React, {useState} from 'react'

function showhide() {
    const [show, setShow] = useState(true);

    const handleClick = (event) => {
        setShow(!show);
    }

  return <div>
    {show && <h2>Hide Me!</h2>}
    <button onClick={handleClick}>{show ? "Hide " : "Show "}  Text</button>
    </div>
}

export default showhide