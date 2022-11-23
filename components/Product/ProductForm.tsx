import { useState, useContext } from "react";
import { formatter } from "@utils/helpers";
import ProductOptions from "./ProductOptions";
import { CartContext } from "@context/shopContext";

export default function ProductForm({ product }) {
    

    const { addToCart } = useContext(CartContext);
    const allVariantOptions = product.variants.edges?.map(variant => {
        const allOptions = {};

        variant.node.selectedOptions.map(item => {
            allOptions[item.name] = item.value;
        })

        return {
            id: variant.node.id,
            title: product.title,
            handle: product.handle,
            image: variant.node.image?.originalSrc,
            options: allOptions,
            variantTitle: variant.node.title,
            variantPrice: variant.node.priceV2.amount,
            variantQuantity: 1
        }
    })
    

    const defaultValues = {}
    product.options.map(item => {
        defaultValues[item.name] = item.values[0];
    })

    const [selectedVariant, setSelectedVariant] = useState(allVariantOptions[0]);
    const [selectedOptions, setSelectedOptions] = useState(defaultValues);

    function setOptions(name, value) {
        setSelectedOptions(prevState => {
            return { ...prevState, [name]: value }
        });

        const selection = {
            ...selectedOptions,
            [name]: value
        }

        allVariantOptions.map(item => {
            if (JSON.stringify(item.options) === JSON.stringify(selection)) {
                setSelectedVariant(item);
            }
        })

    }


    return (
        <div className="bg-[#09111ae2] flex flex-col w-full md:w-1/2 rounded-xl p-8 m-4  md:p-9   relative overflow-hidden">
            <h2 className="text-2xl lg:text-3xl font-bold dark:text-white">{product.title}</h2>
            <span className="text-2xl mt-2 pb-3 text-main-red font-semibold">{formatter.format(product.variants.edges[0].node.priceV2.amount)}</span>
            <div className="">
            {
                product.options.map(({ name, values }) => (
                    <ProductOptions
                        key={`key-${name}`}
                        name={name}
                        values={values}
                        selectedOptions={selectedOptions}
                        setOptions={setOptions}
                    />
                ))
            }
            </div>
            <button
                onClick={() => {
                    addToCart(selectedVariant);
                }}
                className="bg-black dark:bg-white rounded-lg text-white dark:text-black px-2 py-3 hover:bg-gray-800 dark:hover:bg-gray-300 mt-3">Add to Cart</button>
        </div>
    );
}
