import React from 'react'
import './modal.css'

 const Modals = ({  hide, dataModal, cardList, setCardList }) => {
    console.log(dataModal)
    function added() {

        if (cardList.some((item) => item.id === dataModal.id)) {
            dataModal.quantity += 1;
            setCardList([...cardList]);
            hide();
          } else {
            setCardList([...cardList, dataModal]);
            hide();
          }


    }


    return (
        <div key={dataModal.id} className="modal">
            <div className="mains">
                <div className="section-left">
                    <img src={dataModal.imgSrc} alt="" />
                </div>
                <div className="section-right">
                    <div className="title">
                        <p>{dataModal.title}</p>
                        <button onClick={hide}>x</button>
                    </div>

                    <div className="des">
                        <p>{dataModal.title}</p>
                    </div>

                    <div className="addTo">
                        <p>Price : ${dataModal.price}</p>
                        <button onClick={added}>Add To Card</button>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Modals