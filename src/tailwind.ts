import * as stylex from '@stylexjs/stylex';

export const position = stylex.create({
  'static': { position: 'static' },
  'fixed': { position: 'fixed' },
  'absolute': { position: 'absolute' },
  'relative': { position: 'relative' },
  'sticky': { position: 'sticky' }
})

export const display = stylex.create({
  'block': { display: 'block' },
  'inline-block': { display: 'inline-block' },
  'inline': { display: 'inline' },
  'flex': { display: 'flex' },
  'inline-flex': { display: 'inline-flex' },
  'table': { display: 'table' },
  'inline-table': { display: 'inline-table' },
  'table-caption': { display: 'table-caption' },
  'table-cell': { display: 'table-cell' },
  'table-column': { display: 'table-column' },
  'table-column-group': { display: 'table-column-group' },
  'table-footer-group': { display: 'table-footer-group' },
  'table-header-group': { display: 'table-header-group' },
  'table-row-group': { display: 'table-row-group' },
  'table-row': { display: 'table-row' },
  'flow-root': { display: 'flow-root' },
  'grid': { display: 'grid' },
  'inline-grid': { display: 'inline-grid' },
  'contents': { display: 'contents' },
  'list-item': { display: 'list-item' },
  'hidden': { display: 'none' }
})

export const visibility = stylex.create({
  'visible': { visibility: 'visible' },
  'invisible': { visibility: 'hidden' },
  'collapse': { visibility: 'collapse' }
})

export const float = stylex.create({
  'float-right': { float: 'right' },
  'float-left': { float: 'left' },
  'float-none': { float: 'none' }
})

export const width = stylex.create({
  'w-0': { width: 0 },
  'w-full': { width: '100%' },
  'w-screen': { width: '100vw' },
  'w-min': { width: 'min-content' },
  'w-max': { width: 'max-content' },
  'w-fit': { width: 'fit-content' },
  'min-w-0': { 'min-width': 0 },
  'min-w-full': { 'min-width': '100%' },
  'min-w-screen': { 'min-width': '100vw' },
  'min-w-min': { 'min-width': 'min-content' },
  'min-w-max': { 'min-width': 'max-content' },
  'min-w-fit': { 'min-width': 'fit-content' },
  'max-w-0': { 'max-width': 0 },
  'max-w-full': { 'max-width': '100%' },
  'max-w-screen': { 'max-width': '100vw' },
  'max-w-min': { 'max-width': 'min-content' },
  'max-w-max': { 'max-width': 'max-content' },
  'max-w-fit': { 'max-width': 'fit-content' }
})

export const height = stylex.create({
  'h-0': { height: 0 },
  'h-full': { height: '100%' },
  'h-screen': { height: '100vh' },
  'h-min': { height: 'min-content' },
  'h-max': { height: 'max-content' },
  'h-fit': { height: 'fit-content' },
  'min-h-0': { 'min-height': 0 },
  'min-h-full': { 'min-height': '100%' },
  'min-h-screen': { 'min-height': '100vh' },
  'min-h-min': { 'min-height': 'min-content' },
  'min-h-max': { 'min-height': 'max-content' },
  'min-h-fit': { 'min-height': 'fit-content' },
  'max-h-0': { 'max-height': 0 },
  'max-h-full': { 'max-height': '100%' },
  'max-h-screen': { 'max-height': '100vh' },
  'max-h-min': { 'max-height': 'min-content' },
  'max-h-max': { 'max-height': 'max-content' },
  'max-h-fit': { 'max-height': 'fit-content' }
})

export const inset = stylex.create({
  'top-0': { top: 0 },
  'bottom-0': { bottom: 0 },
  'left-0': { left: 0 },
  'right-0': { right: 0 },
})

export const overflow = stylex.create({
  'overflow-auto': { overflow: 'auto' },
  'overflow-hidden': { overflow: 'hidden' },
  'overflow-clip': { overflow: 'clip' },
  'overflow-visible': { overflow: 'visible' },
  'overflow-scroll': { overflow: 'scroll' },
  'overflow-x-auto': { 'overflow-x': 'auto' },
  'overflow-y-auto': { 'overflow-y': 'auto' },
  'overflow-x-hidden': { 'overflow-x': 'hidden' },
  'overflow-y-hidden': { 'overflow-y': 'hidden' },
  'overflow-x-clip': { 'overflow-x': 'clip' },
  'overflow-y-clip': { 'overflow-y': 'clip' },
  'overflow-x-visible': { 'overflow-x': 'visible' },
  'overflow-y-visible': { 'overflow-y': 'visible' },
  'overflow-x-scroll': { 'overflow-x': 'scroll' },
  'overflow-y-scroll': { 'overflow-y': 'scroll' }
})

export const textTransform = stylex.create({
  'uppercase': { 'text-transform': 'uppercase' },
  'lowercase': { 'text-transform': 'lowercase' },
  'capitalize': { 'text-transform': 'capitalize' },
  'normal-case': { 'text-transform': 'none' }
})

export const textAlign = stylex.create({
  'text-left': { 'text-align': 'left' },
  'text-center': { 'text-align': 'center' },
  'text-right': { 'text-align': 'right' },
  'text-justify': { 'text-align': 'justify' },
  'text-start': { 'text-align': 'start' },
  'text-end': { 'text-align': 'end' }
})

export const textOverflow = stylex.create({
  'text-ellipsis': { 'text-overflow': 'ellipsis' },
  'text-clip': { 'text-overflow': 'clip' }
})

export const objectFit = stylex.create({
  'object-contain': { 'object-fit': 'contain' },
  'object-cover': { 'object-fit': 'cover' },
  'object-fill': { 'object-fit': 'fill' },
  'object-none': { 'object-fit': 'none' },
  'object-scale-down': { 'object-fit': 'scale-down' }
})

export const verticalAlign = stylex.create({
  'align-baseline': { 'vertical-align': 'baseline' },
  'align-top': { 'vertical-align': 'top' },
  'align-middle': { 'vertical-align': 'middle' },
  'align-bottom': { 'vertical-align': 'bottom' },
  'align-text-top': { 'vertical-align': 'text-top' },
  'align-text-bottom': { 'vertical-align': 'text-bottom' },
  'align-sub': { 'vertical-align': 'sub' },
  'align-super': { 'vertical-align': 'super' }
})

export const transform = stylex.create({
  'transform-none': { transform: 'none' }
})

export const cursor = stylex.create({
  'cursor-auto': { cursor: 'auto' },
  'cursor-default': { cursor: 'default' },
  'cursor-pointer': { cursor: 'pointer' },
  'cursor-wait': { cursor: 'wait' },
  'cursor-text': { cursor: 'text' },
  'cursor-move': { cursor: 'move' },
  'cursor-help': { cursor: 'help' },
  'cursor-not-allowed': { cursor: 'not-allowed' },
  'cursor-context-menu': { cursor: 'context-menu' },
  'cursor-progress': { cursor: 'progress' },
  'cursor-cell': { cursor: 'cell' },
  'cursor-crosshair': { cursor: 'crosshair' },
  'cursor-vertical-text': { cursor: 'vertical-text' },
  'cursor-alias': { cursor: 'alias' },
  'cursor-no-drop': { cursor: 'no-drop' },
  'cursor-grab': { cursor: 'grab' },
  'cursor-grabbing': { cursor: 'grabbing' },
  'cursor-all-scroll': { cursor: 'all-scroll' },
  'cursor-col-resize': { cursor: 'col-resize' },
  'cursor-row-resize': { cursor: 'row-resize' },
  'cursor-n-resize': { cursor: 'n-resize' },
  'cursor-e-resize': { cursor: 'e-resize' },
  'cursor-s-resize': { cursor: 's-resize' },
  'cursor-w-resize': { cursor: 'w-resize' },
  'cursor-ne-resize': { cursor: 'ne-resize' },
  'cursor-nw-resize': { cursor: 'nw-resize' },
  'cursor-se-resize': { cursor: 'se-resize' },
  'cursor-sw-resize': { cursor: 'sw-resize' },
  'cursor-ew-resize': { cursor: 'ew-resize' },
  'cursor-ns-resize': { cursor: 'ns-resize' },
  'cursor-nesw-resize': { cursor: 'nesw-resize' },
  'cursor-nwse-resize': { cursor: 'nwse-resize' },
  'cursor-zoom-in': { cursor: 'zoom-in' },
  'cursor-zoom-out': { cursor: 'zoom-out' }
})

export const whitespace = stylex.create({
  'whitespace-normal': { 'white-space': 'normal' },
  'whitespace-nowrap': { 'white-space': 'nowrap' },
  'whitespace-pre': { 'white-space': 'pre' },
  'whitespace-pre-line': { 'white-space': 'pre-line' },
  'whitespace-pre-wrap': { 'white-space': 'pre-wrap' }
})

export const wordBreak = stylex.create({
  'break-normal': { 'overflow-wrap': 'normal', 'word-break': 'normal' },
  'break-words': { 'overflow-wrap': 'break-word' },
  'break-all': { 'word-break': 'break-all' },
  'break-keep': { 'word-break': 'keep-all' }
})

export const flexDirection = stylex.create({
  'flex-row': { 'flex-direction': 'row' },
  'flex-row-reverse': { 'flex-direction': 'row-reverse' },
  'flex-col': { 'flex-direction': 'column' },
  'flex-col-reverse': { 'flex-direction': 'column-reverse' }
})

export const flexWrap = stylex.create({
  'flex-wrap': { 'flex-wrap': 'wrap' },
  'flex-wrap-reverse': { 'flex-wrap': 'wrap-reverse' },
  'flex-nowrap': { 'flex-wrap': 'nowrap' }
})

export const alignContent = stylex.create({
  'content-center': { 'align-content': 'center' },
  'content-start': { 'align-content': 'flex-start' },
  'content-end': { 'align-content': 'flex-end' },
  'content-between': { 'align-content': 'space-between' },
  'content-around': { 'align-content': 'space-around' },
  'content-evenly': { 'align-content': 'space-evenly' },
  'content-baseline': { 'align-content': 'baseline' }
})

export const alignItems = stylex.create({
  'items-start': { 'align-items': 'flex-start' },
  'items-end': { 'align-items': 'flex-end' },
  'items-center': { 'align-items': 'center' },
  'items-baseline': { 'align-items': 'baseline' },
  'items-stretch': { 'align-items': 'stretch' }
})

export const justifyContent = stylex.create({
  'justify-start': { 'justify-content': 'flex-start' },
  'justify-end': { 'justify-content': 'flex-end' },
  'justify-center': { 'justify-content': 'center' },
  'justify-between': { 'justify-content': 'space-between' },
  'justify-around': { 'justify-content': 'space-around' },
  'justify-evenly': { 'justify-content': 'space-evenly' }
})

export const justifyItems = stylex.create({
  'justify-items-start': { 'justify-items': 'start' },
  'justify-items-end': { 'justify-items': 'end' },
  'justify-items-center': { 'justify-items': 'center' },
  'justify-items-stretch': { 'justify-items': 'stretch' }
})

export const touchAction = stylex.create({
  'touch-auto': { 'touch-action': 'auto' },
  'touch-none': { 'touch-action': 'none' },
  'touch-manipulation': { 'touch-action': 'manipulation' }
})

export const willChange = stylex.create({
  'will-change-auto': { 'will-change': 'auto' },
  'will-change-scroll': { 'will-change': 'scroll-position' },
  'will-change-contents': { 'will-change': 'contents' },
  'will-change-transform': { 'will-change': 'transform' }
})

export const clear = stylex.create({
  'clear-left': { clear: 'left' },
  'clear-right': { clear: 'right' },
  'clear-both': { clear: 'both' },
  'clear-none': { clear: 'none' }
})

export const boxSizing = stylex.create({
  'box-border': { 'box-sizing': 'border-box' },
  'box-content': { 'box-sizing': 'content-box' }
})

export const userSelect = stylex.create({
  'select-none': { 'user-select': 'none' },
  'select-text': { 'user-select': 'text' },
  'select-all': { 'user-select': 'all' },
  'select-auto': { 'user-select': 'auto' }
})

export const resize = stylex.create({
  'resize-none': { resize: 'none' },
  'resize-y': { resize: 'vertical' },
  'resize-x': { resize: 'horizontal' },
  'resize': { resize: 'both' }
})

export const backgroundRepeat = stylex.create({
  'bg-repeat': { 'background-repeat': 'repeat' },
  'bg-no-repeat': { 'background-repeat': 'no-repeat' },
  'bg-repeat-x': { 'background-repeat': 'repeat-x' },
  'bg-repeat-y': { 'background-repeat': 'repeat-y' },
  'bg-repeat-round': { 'background-repeat': 'round' },
  'bg-repeat-space': { 'background-repeat': 'space' }
})

export const backgroundSize = stylex.create({
  'bg-auto': { 'background-size': 'auto' },
  'bg-cover': { 'background-size': 'cover' },
  'bg-contain': { 'background-size': 'contain' }
})

export const backgroundPosition = stylex.create({
  'bg-bottom': { 'background-position': 'bottom' },
  'bg-center': { 'background-position': 'cover' },
  'bg-left': { 'background-size': 'left' },
  'bg-left-bottom': { 'background-size': 'left bottom' },
  'bg-left-top': { 'background-size': 'left top' },
  'bg-right': { 'background-size': 'right' },
  'bg-right-bottom': { 'background-size': 'right bottom' },
  'bg-right-top': { 'background-size': 'right top' },
  'bg-top': { 'background-size': 'top' }
})

export const backgroundOrigin = stylex.create({
  'bg-origin-border': { 'background-origin': 'border-box' },
  'bg-origin-padding': { 'background-origin': 'padding-box' },
  'bg-origin-content': { 'background-origin': 'content-box' }
})

export const backgroundColor = stylex.create({
  'bg-inherit': { 'background-color': 'inherit' },
  'bg-current': { 'background-color': 'currentColor' },
  'bg-transparent': { 'background-color': 'transparent' },
  'bg-black': { 'background-color': 'rgb(0 0 0)' },
  'bg-white': { 'background-color': 'rgb(255 255 255)' }
})

export const backgroundClip = stylex.create({
  'bg-clip-border': { 'background-clip': 'border-box' },
  'bg-clip-padding': { 'background-clip': 'padding-box' },
  'bg-clip-content': { 'background-clip': 'content-box' },
  'bg-clip-text': { 'background-clip': 'text' }
})

export const backgroundAttachment = stylex.create({
  'bg-fixed': { 'background-attachment': 'fixed' },
  'bg-local': { 'background-attachment': 'local' },
  'bg-scroll': { 'background-attachment': 'scroll' }
})

export const pointerEvents = stylex.create({
  'pointer-events-none': { 'pointer-events': 'none' },
  'pointer-events-auto': { 'pointer-events': 'auto' }
})

export const tailwindStyles = {
  ...position,
  ...display,
  ...visibility,
  ...float,
  ...width,
  ...height,
  ...inset,
  ...overflow,
  ...textTransform,
  ...textAlign,
  ...textOverflow,
  ...objectFit,
  ...verticalAlign,
  ...transform,
  ...cursor,
  ...whitespace,
  ...wordBreak,
  ...flexDirection,
  ...flexWrap,
  ...alignContent,
  ...alignItems,
  ...justifyContent,
  ...justifyItems,
  ...touchAction,
  ...willChange,
  ...clear,
  ...boxSizing,
  ...userSelect,
  ...resize,
  ...backgroundRepeat,
  ...backgroundSize,
  ...backgroundPosition,
  ...backgroundOrigin,
  ...backgroundColor,
  ...backgroundClip,
  ...backgroundAttachment,
  ...pointerEvents
}

export default tailwindStyles
