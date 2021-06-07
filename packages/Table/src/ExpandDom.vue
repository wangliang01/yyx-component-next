<script lang="ts">
import { defineComponent, getCurrentInstance, h, ComponentInternalInstance } from 'vue'
interface IProps {
  row: object
  col?: object
  colIndex: number | string,
  render?: Function
}
export default defineComponent({
  name: 'ExpandDom',
  props: {
    row: Object,
    col: Object,
    render: Function,
    colIndex:[Number, String]
  },
  components: {
  },
  setup () {
    return {

    }
  },
  render() {
    const instance = getCurrentInstance() as ComponentInternalInstance
    const randomIndex = Math.random()
          .toString(35)
          .replace('.', '')
        const params: IProps = {
          row: instance.props.row as object,
          colIndex: (instance.props.colIndex || randomIndex) as (number | string)
        }
        if (instance.props.col) {
          params.col = instance.props.col as object
        }
        return (instance.props.render as Function)(h, params)
  }
})
</script>

