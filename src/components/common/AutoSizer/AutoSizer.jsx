import * as React from "react";

import { useState, useLayoutEffect, useRef } from "react";
import { debounce } from "@mui/material";

import ResizeEmitter from "./ResizeEmitter";

const EMPTY_PAYLOAD = Object.freeze({});

export const AutoSizer = ({
    defaultHeight = 0,
    defaultWidth = 0,
    onResize = () => null,
    disableHeight = false,
    disableWidth = false,
    heightRequest = (v) => v,
    widthRequest = (v) => v,
    style = {},
    className,
    children,
    target,
    payload = EMPTY_PAYLOAD,
    delay = 100,
}) => {

    const autoSizer = useRef(null);
    const initialPayload = useRef(true);

    const [state, setState] = useState({
        height: defaultHeight,
        width: defaultWidth,
    });

    useLayoutEffect(() => {

        const { current } = autoSizer;
        const { parentElement } = current;
        const element = target || parentElement;

        const removeCurrentSize = () => {
            !disableHeight && current.style.removeProperty('height');
            !disableWidth && current.style.removeProperty('width');
        };

        const rollbackSize = (height, width) => {
            !disableHeight && current.style.setProperty('height', `${height}px`);
            !disableWidth && current.style.setProperty('width', `${width}px`);
        };

        const handler = () => {
            removeCurrentSize();
            let { height, width } = element.getBoundingClientRect();
            const style = getComputedStyle(element);
            width -= parseFloat(style.paddingLeft);
            width -= parseFloat(style.paddingRight);
            height -= parseFloat(style.paddingTop);
            height -= parseFloat(style.paddingBottom);
            height = heightRequest(height);
            width = widthRequest(width);
            let isOk = state.height !== height;
            isOk = isOk || state.width !== width;
            if (isOk) {
                setState({ height, width });
                onResize({ height, width });
            } else {
                rollbackSize(height, width);
            }
        };

        const { _emitters: emitters } = AutoSizer;
        let observer;
        if (emitters.has(element)) {
            observer = emitters.get(element);
        } else {
            observer = new ResizeEmitter(element, () => {
                emitters.delete(element);
            });
            emitters.set(element, observer);
        }

        const handlerD = debounce(handler, delay);
        observer.subscribe(handlerD);
        handler();

        window.addEventListener('resize', handlerD);
    
        return () => {
            window.removeEventListener('resize', handlerD);
            observer.unsubscribe(handlerD);
            handlerD.clear();
        };

    }, [disableHeight, disableWidth, heightRequest, widthRequest, state, delay, onResize]);

    useLayoutEffect(() => {
        if (payload !== EMPTY_PAYLOAD && !initialPayload.current) {
            setState((state) => ({ ...state }));
        } else {
            initialPayload.current = false;
        }
    }, [payload]);

    const { height, width } = state;

    const outerStyle = {
        height,
        width,
    };

    const childParams = { height, width, payload };

    if (disableHeight) {
        outerStyle.height = style.height;
    }

    if (disableWidth) {
        outerStyle.width = style.width;
    }

    return (
        <div
            className={className}
            ref={autoSizer}
            style={{
                ...style,
                ...outerStyle,
            }}
        >
            {children(childParams)}
        </div>
    );

};

AutoSizer._emitters = new WeakMap();

export default AutoSizer;
