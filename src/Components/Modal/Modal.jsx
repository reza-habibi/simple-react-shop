import React from 'react'
import './modal.css'

 const Modals = ({  hide, dataModal, cardList, setCardList }) => {

    function added() {


        let item = cardList.find((i) => i.id === dataModal.id)
        if (item) {
            let arr = [...cardList];
            let index = arr.findIndex((i) => i.id === dataModal.id);
            arr[index].count++;
            setCardList(arr);
            hide();
        }
        else {
            setCardList([...cardList, { id: dataModal.id, imgSrc: dataModal.imgSrc, title: dataModal.title, price: dataModal.price, count: 1 }])
            hide();
        }


    }


    return (
        <div className="modal">
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