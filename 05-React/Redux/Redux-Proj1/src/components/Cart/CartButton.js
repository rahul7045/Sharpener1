import { useDispatch , useSelector } from 'react-redux';

import {uiActions} from '../../store/ui-slice'
import classes from './CartButton.module.css';

const CartButton = (props) => {
  const dispatch = useDispatch()

  const noOfItems = useSelector((state)=>state.cart.totalQuantity)
  const toggleCartHandler =()=>{
      dispatch(uiActions.toggle())
  }
  return (
    <button className={classes.button} onClick={toggleCartHandler}>
      <span>My Cart</span>
      <span className={classes.badge}>{noOfItems}</span>
    </button>
  );
};

export default CartButton;
