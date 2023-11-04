import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class PaginatorService {
  paginate(totalItems: number, currentPage: number, pageSize: number) {
    currentPage = currentPage || 1;
    pageSize = pageSize || 6;

    // Calculate the total number of pages
    const totalPages = Math.ceil(totalItems / pageSize);

    let startPage: number, endPage, startEllipses, endEllipses;
    if (totalPages <= 7) {
      // Less than 7 total pages, so show all pages
      startPage = 1;
      endPage = totalPages;
      startEllipses = endEllipses = false;
    } else {
      // More than 7 total pages, so calculate start and end pages
      if (currentPage <= 4) {
        startPage = 1;
        endPage = 5;
        endEllipses = true;
        startEllipses = false;
      } else if (currentPage + 3 >= totalPages) {
        startPage = totalPages - 4;
        endPage = totalPages;
        startEllipses = true;
        endEllipses = false;
      } else {
        startPage = currentPage - 2;
        endPage = currentPage + 2;
        startEllipses = endEllipses = true;
      }
    }

    // Calculate the start and end item indexes
    const startIndex = (currentPage - 1) * pageSize;
    const endIndex = Math.min(startIndex + pageSize - 1, totalItems - 1);

    // Generate an array of page numbers to display in the pagination control
    const pages = Array.from(
      { length: endPage - startPage + 1 },
      (_, i) => startPage + i
    );

    // Return pagination information
    return {
      totalItems: totalItems,
      currentPage: currentPage,
      pageSize: pageSize,
      totalPages: totalPages,
      startPage: startPage,
      endPage: endPage,
      startIndex: startIndex,
      endIndex: endIndex,
      startEllipses: startEllipses,
      endEllipses: endEllipses,
      pages: pages,
    };
  }
}
