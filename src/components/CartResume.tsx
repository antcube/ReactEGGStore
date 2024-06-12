export default function CartResume({ totalAmount }) {
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
                    <strong>${totalAmount}</strong>
                </div>
                <small className="pb-2.5">
                    Incluye impuesto PAIS y percepción AFIP.
                </small>
            </div>
            <button
                className="w-full bg-[#ff3b3c] text-white font-bold border-0 h-10 rounded-[10px] hover:bg-[#ff5151]"
                id="buy"
                type="button"
            >
                COMPRAR
            </button>
        </div>
    );
}
