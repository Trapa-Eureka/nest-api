import { Controller, Get, Param, Post, Delete, Patch, Body, Query } from '@nestjs/common';

@Controller('movies')
export class MoviesController {
    @Get()
    getAll() {
        return 'This will return all movies';
    }

    @Get("search")
    search(@Query('year') searchingYear: string) {
        return `We are searching for a movie made after: ${searchingYear}`;
    }

    @Get(':id')
    getOne(@Param('id') movieId: String) {  // id라는 Param을 id라는 args에 저장.
        return `This will return one movie with the id: ${movieId}`;
    }

    @Post()
    create(@Body() movieData) {
        return movieData;
    }

    @Delete(':id')
    remove(@Param('id') movieId: String) {
        return `This will delete a movie with the id: ${movieId}`;
    }

    @Patch(':id')
    patch(@Param('id') movieId: string, @Body() updateData) {
        return {
            // 업데이트할 movie의 id와 보낼 데이터의 obj를 리턴
            updatedMovie: movieId,
            ...updateData,
        };
    }
}