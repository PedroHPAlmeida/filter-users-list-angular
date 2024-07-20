import { Component, EventEmitter, Output } from '@angular/core';
import { FilterOptions } from '../../types/filter-options.type';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrl: './filter.component.scss'
})
export class FilterComponent {
  filterOptions: FilterOptions = {
    name: undefined,
    startDate: undefined,
    endDate: undefined,
    status: undefined,
  };
  statuses = [
    { display: 'Todos', value: null },
    { display: 'Ativo', value: true },
    { display: 'Inativo', value: false },
  ];

  @Output('onFilter') onFilterEmitt = new EventEmitter<FilterOptions>();

  onFilter() {
    this.onFilterEmitt.emit(this.filterOptions);
  }
}
