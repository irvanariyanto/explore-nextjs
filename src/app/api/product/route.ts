import { retrieveData, retrieveDataById } from "@/lib/firebase/service";
import { NextRequest, NextResponse } from "next/server";
const data = [
  {
    id: 1,
    title: "Nike Jordan",
    price: 1600000,
    image:
      "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/bf36545d-5fb4-4c97-a7ea-c159c1b704c4/air-jordan-1-low-womens-shoes-Bz4GT4.png",
  },
  {
    id: 2,
    title: "Nike Dunk",
    price: 1000000,
    image:
      "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/a3e7dead-1ad2-4c40-996d-93ebc9df0fca/dunk-low-retro-mens-shoes-87q0hf.png",
  },
  {
    id: 3,
    title: "Nike Air",
    price: 1200000,
    image:
      "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/f3f8dae7-a824-4132-a0b2-07571e962d13/air-max-1-womens-shoes-0vW0ds.png",
  },
  {
    id: 4,
    title: "Nike Air",
    price: 1200000,
    image:
      "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/f3f8dae7-a824-4132-a0b2-07571e962d13/air-max-1-womens-shoes-0vW0ds.png",
  },
];
export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const id = searchParams.get("id");
  if (id) {
    // const detailProduct = data.find((item) => item.id === Number(id));
    const detailProduct = await retrieveDataById("products", id);
    if (detailProduct) {
      return NextResponse.json({
        status: 200,
        message: "Success",
        data: detailProduct,
      });
    }

    return NextResponse.json({
      status: 404,
      message: "Not Found",
      data: {},
    });
  }
  const products = await retrieveData("products");
  return NextResponse.json({ status: 200, message: "Success", data: products });
}
