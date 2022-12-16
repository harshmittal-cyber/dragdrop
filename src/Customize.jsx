import React, { useState } from 'react'
import PizzaBase from './assets/PizzaBase.png'
import Mushroom from './assets/Mushroom.png';
import Olive from './assets/Olive.png';
import Tomato from './assets/Tomato.png'
import BaseCheese from './assets/BaseCheese.png'

const Customize = () => {
    const [show, setShow] = useState(false)
    const [olive, setolive] = useState(false)
    const [mush, setMush] = useState(false)
    const [tom, setTom] = useState(false)

    const handleDrag = (e) => {
        e.dataTransfer.setData('image', e.target.id)
    }

    const handleDrop = (e) => {
        e.preventDefault()
        var data = e.dataTransfer.getData('image');
        console.log('dro', data)
        e.target.appendChild(document.getElementById(data))
        setShow(true)
    }

    const handleChild = (e) => {
        e.preventDefault()
        console.log(e.target)
        let data = e.dataTransfer.getData('image');
        console.log(data)
        if (data == 'olive') {
            setolive(true)
        }
        if (data === 'mush') {
            setMush(true)
        }
        if (data == 'tomato') {
            setTom(true)
        }
        if (data === 'image2' || data === 'image1') {
            return
        }
        console.log('sckjs', data)


        document.getElementById('divimage1').appendChild(document.getElementById(data))
    }

    const handleAllowedDrop = (e) => {
        e.preventDefault()
    }

    return (
        <div style={{ padding: "30px" }}>
            <div style={{ display: 'flex', flexDirection: 'column', postion: 'relative' }}>
                <div id='divimage1' style={{
                    width: "300px",
                    height: "300px",
                    border: "1px solid black",
                    borderRadius: "50%"
                }} onDrop={handleDrop} onDragOver={handleAllowedDrop}>

                </div>

                <div style={{ display: 'flex', marginTop: '10px', padding: '20px' }}>
                    <div style={{ border: '1px solid black', padding: "10px" }}>
                        <img id='image1' src={PizzaBase} alt="base1" height="300px" width="300px"
                            draggable={true}
                            onDragStart={handleDrag}
                            onDrop={handleChild} onDragOver={handleAllowedDrop}
                        />
                    </div >
                    <div style={{ border: '1px solid black', padding: "10px" }}>
                        <img id='image2' src={PizzaBase} alt="base2"
                            height="300px" width="300px"
                            onDragStart={handleDrag}
                            onDrop={handleChild} onDragOver={handleAllowedDrop}
                        />
                    </div>
                    {show &&
                        <div style={{ display: 'flex', flexDirection: 'column', paddingLeft: '10px', border: '1px solid black' }}>
                            <img id='olive' src={Olive} alt='olive' height={olive ? "250px" : '100px'} width={olive ? "200px" : '100px'}
                                onDragStart={handleDrag}
                                style={{ position: olive && 'absolute', left: olive && '60px', top: olive && '50px' }}
                            />
                            <img id='mush' src={Mushroom} alt='olive' height={mush ? "250px" : '100px'} width={mush ? "220px" : '100px'}
                                onDragStart={handleDrag}
                                style={{ position: mush && 'absolute', left: mush && '70px', top: mush && '30px' }}
                            />
                            <img id='tomato' src={Tomato} alt='olive' height={tom ? "250px" : '100px'} width={tom ? "200px" : '100px'}
                                onDragStart={handleDrag}
                                style={{ position: tom && 'absolute', left: tom && '90px', top: tom && '50px' }}
                            />
                        </div>
                    }
                </div>
            </div>
        </div>
    )
}

export default Customize