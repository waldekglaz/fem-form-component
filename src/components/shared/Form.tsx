interface FormProps {
  children: React.ReactNode
  onSubmit: React.FormEventHandler<HTMLFormElement>
}

const Form: React.FC<FormProps> = ({ children, onSubmit }) => {
  return <form onSubmit={onSubmit}>{children}</form>
}

export default Form
