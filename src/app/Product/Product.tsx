import { Add, Delete, Edit } from "@mui/icons-material";
import { Button, Card, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, IconButton, Table, TableBody, TableCell, TableRow, TextField, Typography } from "@mui/material";
import { FC, useEffect, useMemo, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import AppTableHeader from "../../@utils/@shared-components/AppTableHeader";
import { addProductAction, editProductAction, fetchProductsAction, removeProductAction } from "./_store";

interface ProductItemType {
    _id: string;
    name: string;
    count: number;
}

const headerItems = [
    {
        content: "No",
        align: "center",
        className: "w-32"
    },
    {
        content: "Product Name",
        align: "center",
        className: ""
    },
    {
        content: "Product Count",
        align: "center",
        className: ""
    },
    {
        content: "Action",
        align: "center",
        className: 'w-40'
    }
]


const Product: FC = () => {

    const dispatch = useDispatch();

    const [open, setOpen] = useState(false);
    const [name, setName] = useState('');
    const [count, setCount] = useState(0);
    const [id, setId] = useState('');
    const [dialogRole, setDialogRole] = useState('add');

    const { products, isLoading } = useSelector(state => state.product);

    useEffect(() => {
        dispatch(fetchProductsAction());
    }, [dispatch])

    const handleClose = () => {
        setOpen(false)
    }

    const removeProduct = (id: string) => {
        dispatch(removeProductAction(id));
    }



    const editProduct = (productItem: ProductItemType) => {
        let { _id, name, count } = productItem;
        setId(_id);
        setName(name);
        setCount(count);
        setDialogRole('edit');
        setOpen(true);
    }

    const addNewProduct = () => {
        setId('');
        setName('');
        setCount(0);
        setDialogRole('add');
        setOpen(true);
    }

    const handleDialogSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        console.log(dialogRole);

        if (dialogRole === 'add') {
            dispatch(addProductAction({ name, count }));
        }
        else {
            dispatch(editProductAction({ id, name, count }));
        }

        handleClose();
    }




    return <div>

        <Card className="w-full p-8 mb-8 relative flex items-center justify-between bg-gray-800 rounded-none shadow-lg shadow-slate-300">
            <Typography variant="h3" className="text-gray-50 text-center">
                Procuct Table
            </Typography>
            <Button variant="contained" endIcon={<Add />} className="bg-blue-700 hover:bg-blue-600" onClick={() => addNewProduct()}>
                ADD
            </Button>
        </Card>


        <Table>
            <AppTableHeader headerItems={headerItems} />

            <TableBody>
                {
                    useMemo(() => {
                        return products.map((productItem: ProductItemType, index: number) => {
                            return <TableRow key={productItem._id}>
                                <TableCell align="center">
                                    {index + 1}
                                </TableCell>

                                <TableCell align="center">
                                    {productItem.name}
                                </TableCell>

                                <TableCell align="center">
                                    {productItem.count}
                                </TableCell>

                                <TableCell align="center" className='flex justify-between'>
                                    <IconButton color="primary" size="large" onClick={() => editProduct(productItem)}>
                                        <Edit />
                                    </IconButton>

                                    <IconButton color="error" size="large" className="mr-2" onClick={() => removeProduct(productItem._id)}>
                                        <Delete />
                                    </IconButton>
                                </TableCell>
                            </TableRow>
                        })
                    }, [products])
                }

            </TableBody>
        </Table>



        <Dialog
            open={open}
            onClose={handleClose}
            PaperProps={{
                component: 'form',
                onSubmit: handleDialogSubmit
            }}
        >
            <DialogTitle className="text-center">Add New Product</DialogTitle>
            <DialogContent className="w-86 flex flex-col">
                <TextField
                    autoFocus
                    required
                    margin="dense"
                    id="name"
                    name="email"
                    label="Product Name"
                    variant="outlined"
                    value={name}
                    onChange={({ target: { value } }) => setName(value)}
                />

                <TextField
                    autoFocus
                    required
                    margin="dense"
                    id="count"
                    name="count"
                    label="Product Count"
                    variant="outlined"
                    type='number'
                    value={count}
                    onChange={({ target: { value } }) => setCount(value)}
                />

            </DialogContent>
            <DialogActions>
                <Button type="submit" variant="contained" className="bg-blue-700 hover:bg-blue-600">Submit</Button>
                <Button onClick={handleClose} variant="outlined" color='error'>Cancel</Button>
            </DialogActions>
        </Dialog>
    </div>
}

export default Product;