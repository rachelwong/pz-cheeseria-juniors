import Button from '@material-ui/core/Button';
// Types
import { CartItemType } from '../../App';
// Styles
import { Wrapper } from './Item.styles';
import {DialogTitle, Dialog, DialogContent, DialogActions } from '@material-ui/core';
import { useState } from 'react'

type Props = {
  item: CartItemType;
  handleAddToCart: (clickedItem: CartItemType) => void;
};

const Item: React.FC<Props> = ({ item, handleAddToCart }) => {
  const [open, setOpen] = useState(false);

  return (
    <>
    <Wrapper>
        <img src={item.image} alt={item.title} onClick={ () => setOpen(true)} />
      <div>
        <h3>{item.title}</h3>
        <h3>${item.price}</h3>
      </div>
    <Button
      onClick={() => handleAddToCart(item)}
      data-cy={`add-to-cart-${item.id}`}>Add to cart</Button>
      </Wrapper>
    <Dialog
         open={open}
         onClose={() => setOpen(false)}
         aria-labelledby="confirm-dialog"
       >
         <DialogTitle id="confirm-dialog">{item.title}</DialogTitle>
         <DialogContent>{item.description}</DialogContent>
         <DialogActions>
           <Button
             variant="contained"
             onClick={() => setOpen(false)}
             color="secondary"
           >
             Close
           </Button>
         </DialogActions>
       </Dialog>

    </>
  );
};

export default Item;