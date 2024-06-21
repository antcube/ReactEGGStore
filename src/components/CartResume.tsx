import { useSelector } from "react-redux";
import type { Cart, stateType } from "./../types";
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'

type CartResumeProps = {
    productsOnCart: Cart[];
}

export default function CartResume({productsOnCart}: CartResumeProps) {
    const total = useSelector((store: stateType) => store.products.totalAmount);

    const MySwal = withReactContent(Swal)

    const handleBuy = () => {
        MySwal.fire({
            title: 'Gracias por tu compra!',
            html: '<p>Tu pedido ha sido realizado con éxito.</p>',
            icon: 'success',
            timer: 5000,
            confirmButtonColor: '#6e7881',
            allowOutsideClick: false,
            // customClass: {
            //     confirmButton: 'btnConfirmSweetAlert',
            //     cancelButton: 'btnCancelSweetAlert',
            //     popup: 'popupSweetAlert'
            // }
        })
        .then( result => {
            if(result.isConfirmed || result.dismiss === Swal.DismissReason.timer) {
                localStorage.removeItem('cart');
                window.location.href = '/';
            }
        });
    }

    return (
        <div className="bg-[#f2f2f2] rounded-[5px] p-[30px] m-2.5 h-[220px] break-words flex justify-between w-[340px] flex-col">
            <div className=" flex-grow-[1] flex flex-col justify-between">
                <h2 className="flex justify-between">
                    <span>Resumen</span>
                    <span>del</span>
                    <span>pedido</span>
                </h2>
                <div className="flex justify-between items-center">
                    <h3>Total</h3>
                    <strong>${total}</strong>
                </div>
                <small className="pb-2.5">
                    Incluye impuesto PAIS y percepción AFIP.
                </small>
            </div>
            <button
                className="w-full bg-[#ff3b3c] text-white font-bold border-0 h-10 rounded-[10px] hover:bg-[#ff5151]"
                id="buy"
                type="button"
                onClick={handleBuy}
            >
                COMPRAR {productsOnCart.length} PRODUCTOS
            </button>
        </div>
    );
}
