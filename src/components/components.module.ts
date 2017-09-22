import { DirectivesModule } from './../directives/directives.module';
import { NgModule } from '@angular/core';

import { HeaderComponent } from './header/header.component';

@NgModule({
	declarations: [HeaderComponent],
	imports: [DirectivesModule],
	exports: [HeaderComponent]
})
export class ComponentsModule {}
