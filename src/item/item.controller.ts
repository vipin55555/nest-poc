import { Controller, Get, Param, Post, Body, Put, Delete } from '@nestjs/common';
import { ItemService } from './item.service';
import { AddUpdateItemDto } from '../model/dto/item.dto';
import { Item } from '../model/interface/item.interface';
import config from '../config/config';

@Controller(`${config.app.apiVersion}/item`)
export class ItemController {

    constructor(private itemService: ItemService) {
    }

    @Get()
    getAllItems(): Promise<Item[]> {
        return this.itemService.getAllItems();
    }

    @Get(':id')
    getItemById(@Param('id') id): Promise<Item> {
        return this.itemService.getItemById(id);
    }

    @Post()
    createItem(@Body() itemDto: AddUpdateItemDto): Promise<Item> {
        return this.itemService.createItem(itemDto);
    }

    @Put(':id')
    updateItem(@Param('id') id, @Body() itemDto: AddUpdateItemDto): Promise<Item> {

        return this.itemService.updateItem(id, itemDto);
    }

    @Delete(':id')
    deleteItemById(@Param('id') id): Promise<Item> {
        return this.itemService.deleteItemById(id);
    }

}
