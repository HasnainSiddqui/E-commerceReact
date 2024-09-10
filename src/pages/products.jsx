import axios from "axios"
import { useEffect, useState } from "react"
import Cards from "../component/productCard"
import Chips from "../component/chips"

let Product = () => {

    let [product, setProduct] = useState([])
    let [loader, setLoader] = useState(true)
    let [renderChips, setRenderChips] = useState([])
    let [renderChipsName, setRenderChipsName] = useState("all")

    useEffect(() => {
        let url = 'https://dummyjson.com/products';
        renderChipsName == "all" ? (
            url = `https://dummyjson.com/products  `
        ) : (
            url = `https://dummyjson.com/products/category/${renderChipsName}`
        )

        axios.get(url)
            .then((res) => {
                setProduct(res.data.products)
                setLoader(false)
            }).catch((err) => {
                console.log(err);
                setLoader(false)
            })
    }, [renderChipsName])




    useEffect(() => {

        console.log("chips call")

        axios.get('https://dummyjson.com/products/categories')
            .then((importChips) => {
                setRenderChips(importChips.data)
                setLoader(false)
            }).catch((err) => {
                console.log(err);
                setLoader(false)
            })
    }, [])






    return (
        <>
            {loader ? (<h1 className="text-center my-10" >Loading ...</h1>
            ) : (
                <div>
                    <div className="flex flex-wrap">
                        <Chips click={() => {
                            setRenderChipsName("all")
                        }}
                            category={{ name: "All", slug: "all" }} isChozen={renderChipsName === "all"} />


                        {renderChips.map((allChips) =>

                            <Chips category={allChips} id={allChips.slug}
                                click={() => setRenderChipsName(allChips.slug)}
                                isChozen={allChips.slug == renderChipsName}
                            />)}  </div>




                    <div className="flex flex-wrap">
                        {product.map((data) => (<Cards title={data.title} img={data.images} price={data.price}
                         description={data.description} category={data.category} id={data.id}
                          learnMore={() => console.log("learnMoreClick")} />)
                        )}
                    </div>

                </div>
            )}

        </>
    )

}
export default Product