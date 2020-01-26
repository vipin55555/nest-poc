import { Injectable } from '@nestjs/common';
import { AddUpdateItemDto } from './dto/item.dto';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { Item } from './interface/item.interface';

@Injectable()
export class ItemService {

    constructor(@InjectModel('Item') private readonly itemModel: Model<Item>) {

    }

    async getAllItems(): Promise<Item[]> {
        return await this.itemModel.find();
    }

    async getItemById(id: string): Promise<Item> {
        return await this.itemModel.findOne({ _id: id });
    }

    async createItem(itemDto: AddUpdateItemDto): Promise<Item> {
        return await this.itemModel.create(itemDto);
    }

    async updateItem(id: string, itemDto: AddUpdateItemDto): Promise<Item> {

        return await this.itemModel.findByIdAndUpdate(id, itemDto, { new: true });
    }

    async deleteItemById(id: string): Promise<Item> {
        return await this.itemModel.findByIdAndDelete(id);
    }
}
