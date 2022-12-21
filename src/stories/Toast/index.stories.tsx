import Component from '.'
import type { ComponentMeta, ComponentStory } from '@storybook/react'
import { EventListener } from 'services'

class Toast {
  private emit(message: string, type: NToast.Type) {
    EventListener.emit<NToast.Emit>('toast', { message, type })
  }
  success(message: string) {
    this.emit(message, 'success')
  }
  info(message: string) {
    this.emit(message, 'info')
  }
  warn(message: string) {
    this.emit(message, 'warn')
  }
  error(message: string) {
    this.emit(message, 'error')
  }
}

const toast = new Toast()

export default {
  title: 'Feedback/Toast',
  component: Component
} as ComponentMeta<typeof Component>

export const Default: ComponentStory<typeof Component> = ({ ...props }) => (
  <>
    <div className="flex gap-3">
      <button onClick={() => toast.success('Success')}>Success</button>
      <button onClick={() => toast.info('Info')}>Info</button>
      <button onClick={() => toast.warn('Warn')}>Warn</button>
      <button onClick={() => toast.error('Error')}>Error</button>
    </div>
    <Component {...props} />
  </>
)
