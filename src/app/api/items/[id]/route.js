import dbConnection from "@/db/mongodb";
import Item from "@/models/item";
import { NextResponse } from "next/server";

//update an item
//context.params.id
export async function PUT(request, {params}){
  const {id} = params;
  const {newTitle: title, newDescription: description} = await request.json();
  await dbConnection();
  await Item.findByIdAndUpdate(id, {title, description});
  return NextResponse.json({msg: `Item with id ${id} was updated successfully`}, {status: 200})
}

//get details of an item with provided id
export async function GET(request, {params}){
  const {id} = params;
  await dbConnection();
  const item = await Item.findOne({_id: id});
  return NextResponse.json({item}, {status: 200});
}