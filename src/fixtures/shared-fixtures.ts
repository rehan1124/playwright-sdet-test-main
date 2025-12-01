import { mergeTests } from '@playwright/test';
import { test as popups } from './pop-ups-fixtures';
import { test as navbar } from './navbar-fixtures';
import { test as cards } from './cards-fixtures';

export const test = mergeTests(popups, navbar, cards);