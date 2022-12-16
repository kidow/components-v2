import type { FC, ReactNode } from 'react'
import { XMarkIcon } from '@heroicons/react/24/solid'
import classnames from 'classnames'
import { createPortal } from 'react-dom'

interface Props extends ReactProps {
  isOpen: boolean
  onClose: () => void
  title?: string
  /**
   * @default 'max-w-lg'
   */
  maxWidth?:
    | 'max-w-screen-2xl'
    | 'max-w-screen-xl'
    | 'max-w-screen-lg'
    | 'max-w-screen-md'
    | 'max-w-screen-sm'
    | 'max-w-full'
    | 'max-w-8xl'
    | 'max-w-7xl'
    | 'max-w-6xl'
    | 'max-w-5xl'
    | 'max-w-4xl'
    | 'max-w-3xl'
    | 'max-w-2xl'
    | 'max-w-xl'
    | 'max-w-lg'
    | 'max-w-md'
    | 'max-w-sm'
    | 'max-w-xs'
  description?: ReactNode
  padding?: boolean
  footer?: ReactNode
}
interface State {}

const Modal: FC<Props> = ({
  isOpen,
  onClose,
  children,
  maxWidth = 'max-w-lg',
  title,
  description,
  padding = true,
  footer
}) => {
  if (!isOpen) return null
  return createPortal(
    <div
      className="fixed inset-0 z-30 overflow-y-auto"
      aria-labelledby="modal-title"
      aria-modal="true"
      role="dialog"
    >
      <div className="flex min-h-screen items-center justify-center p-0 text-center md:block">
        <div
          className="fixed inset-0 bg-black opacity-30 transition-opacity"
          aria-hidden="true"
          onClick={onClose}
        ></div>
        <span
          className="hidden h-screen align-middle md:inline-block"
          aria-hidden="true"
        >
          &#8203;
        </span>
        <div
          className={classnames(
            `my-8 inline-block w-full transform overflow-hidden rounded-lg bg-white text-left align-middle shadow-xl transition-all`,
            maxWidth
          )}
        >
          <header className="border-t-4 border-gray-800">
            {!!title && (
              <div
                className={classnames(
                  'flex border-b border-gray-200 p-4',
                  !!description ? 'items-start' : 'items-center'
                )}
              >
                <div className="flex-1">
                  <h1 className="text-lg font-semibold">{title}</h1>
                  {!!description && (
                    <p className="mt-1 text-sm text-gray-500">{description}</p>
                  )}
                </div>
                <button
                  onClick={onClose}
                  className="rounded-full p-2 hover:bg-gray-300"
                >
                  <XMarkIcon className="h-5 w-5 text-gray-800" />
                </button>
              </div>
            )}
          </header>
          <div
            className={classnames({
              'py-6 px-7': padding
            })}
          >
            {children}
          </div>
          {footer && <footer className="border-t py-4 px-7">{footer}</footer>}
        </div>
      </div>
    </div>,
    document.body
  )
}

export default Modal
