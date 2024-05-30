import dbConnection from "@/db/mongodb";
import Item from "@/models/item";
import { NextResponse } from "next/server";

export async function POST(request){
  const {title, description} = await request.json();
  await dbConnection();
  await Item.create({title, description});
  return NextResponse.json({msg: "Item created successfully"}, {status: 201})
}

export async function GET(){
  await dbConnection();
  const items = await Item.find();
  return NextResponse.json({items});
}

export async function DELETE(request){
  const id = request.nextUrl.searchParams.get('id');
  await dbConnection();
  await Item.findByIdAndDelete(id);
  return NextResponse.json({msg: `Item with id ${id} was deleted successfully`}, {status: 404})
}