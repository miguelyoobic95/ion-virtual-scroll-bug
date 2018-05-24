import { Component, Prop, Event, EventEmitter, Element } from '@stencil/core';

@Component({
    tag: 'yoo-virtual-scroll',
    styleUrl: 'virtual-scroll-component.scss',
    scoped: true
})
export class YooVirtualScrollComponent {

    @Prop() text: string;
    @Prop() disabled: boolean;
    @Prop() items: any;

    @Event() buttonClicked: EventEmitter<boolean>;

    @Element() host: HTMLStencilElement;

    componentWillLoad() {
        console.log('items', this.items);
    }
    click() {
        if (!this.disabled) {
            this.buttonClicked.emit(true);
        }
    }
    renderItem(item, index): JSX.Element {
        return(
            <ion-item lines="none">
                <div>{item}</div>
            </ion-item>
        );
    }

    headerFn(item, index, records) {
        return (item % 2 === 0) ? 'header' : null;
    }

    renderHeader(item, index): JSX.Element {
        return (<ion-item-divider color="light"><span innerHTML={item}></span></ion-item-divider>);
    }

    render(): JSX.Element {
        console.log('render items', this.items);
        return ([
            <div>Virtual Scroll below</div>,
            <ion-virtual-scroll 
                items={this.items}
                approxHeaderHeight={33}
                approxItemHeight={44}
                renderItem={this.renderItem}
                headerFn={this.headerFn}
                renderHeader={this.renderHeader}
            ></ion-virtual-scroll>
        ]);
    }

}
