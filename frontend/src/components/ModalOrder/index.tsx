import Modal from 'react-modal';
import styles from './styles.module.scss';

import { FiX } from 'react-icons/fi'

import { OrderItemProps } from '../../pages/dashboard'

interface ModalOrderProps{
  isOpen: boolean;
  onRequestClose: () => void;
  order: OrderItemProps[];
  finishModal: (id:string) => void
}

export function ModalOrder({ isOpen, onRequestClose, order,finishModal }: ModalOrderProps){

  const customStyles = {
    content:{
      top: '50%',
      bottom: 'auto',
      left: '50%',
      right: 'auto',
      padding: '30px',
      transform: 'translate(-50%, -50%)',
      backgroundColor: '#1d1d2e'
    }
  };

  return(
   <Modal
    isOpen={isOpen}
    onRequestClose={onRequestClose}
    style={customStyles}
   >

    <button
    type="button"
    onClick={onRequestClose}
    className="react-modal-close"
    style={{ background: 'transparent', border:0 }}
    >
      <FiX size={45} color="#f34748" />
    </button>

    <div className={styles.container}>

      <h2>Detalhes do pedido</h2>
      <span className={styles.table}>
        Mesa: <strong>{order[0].order.name}</strong>
      </span>

      {order.map( item => (
        <section key={item.id} className={styles.containerItem}>
          <span> R$ {item.product.price} - <strong>{item.product.name} QTD {item.amount}</strong></span>
          <span className={styles.description}>
            {item.product.description}
          </span>
        </section>
      ))}


      <button className={styles.buttonOrder} 
              onClick={ () => finishModal(order[0].order_id)}>
        Concluir pedido
      </button>


    </div>

   </Modal>
  )
}