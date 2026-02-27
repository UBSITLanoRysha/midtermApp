import { Routes } from '@angular/router';
import { Home } from './comps/home/home';
import { Component } from '../../node_modules/@angular/compiler/types/compiler';
import { Interpolation } from './databinding/interpolation/interpolation';
import { PropertyBinding } from './databinding/property-binding/property-binding';
import { EventBinding } from './databinding/event-binding/event-binding';
import { TwowayBinding } from './databinding/twoway-binding/twoway-binding';
import { AttributeBinding } from './databinding/attribute-binding/attribute-binding';
import { ClassBinding } from './databinding/class-binding/class-binding';
import { StyleBinding } from './databinding/style-binding/style-binding';

export const routes: Routes = [
    { path: 'home', component: Home },
    { path: 'interpolation', component: Interpolation },
    { path: 'property-binding', component: PropertyBinding },
    { path: 'event-binding', component: EventBinding },
    { path: 'two-way', component: TwowayBinding },
    { path: 'attribute', component: AttributeBinding },
    { path: 'class', component: ClassBinding },
    { path: 'style', component: StyleBinding },
    { path: '', redirectTo: 'home', pathMatch: 'full' }
];
