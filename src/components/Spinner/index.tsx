import './spinner.scss';

const Spinner = () => {
  return (
    <div className={"spinner"} data-testid="spinner">
  <div className={"double_bounce1"}></div>
  <div className={"double_bounce2"}></div>
</div>
  )
}

export default Spinner