import { isWithinInterval } from "date-fns";
import { User } from "../types/user/user.type";
import { FilterOptions } from "../types/filter-options.type";

export function filterUsers(filtersOptions: FilterOptions, users: User[]): User[] {
    let filteredUsers: User[] = [];

    filteredUsers = filterUsersByName(filtersOptions.name, users);
    filteredUsers = filterUsersByStatus(filtersOptions.status, filteredUsers);
    filteredUsers = filterUsersByDate(filtersOptions.startDate, filtersOptions.endDate, filteredUsers);

    return filteredUsers;
}

function filterUsersByName(name: string | undefined, users: User[]): User[] {
    if (name === undefined) {
        return users;
    }
    return users.filter(user => user.nome.toLowerCase().includes(name.toLowerCase()));
}

function filterUsersByStatus(status: boolean | undefined, users: User[]): User[] {
    if (status === undefined) {
        return users;
    }
    return users.filter(user => user.ativo === status);
}

function filterUsersByDate(startDate: Date | undefined, endDate: Date | undefined, users: User[]): User[] {
    if (startDate === undefined || endDate === undefined) {
        return users;
    }

    const END_DATE_INCLUDED = endDate.setDate(endDate.getDate() + 1);

    return users.filter(user => isWithinInterval(user.dataCadastro, {
        start: startDate,
        end: END_DATE_INCLUDED,
    }))
}