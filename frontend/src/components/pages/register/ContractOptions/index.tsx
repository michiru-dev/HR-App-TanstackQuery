import { ShowOptions } from '../ShowOptions'
import { EmployeeWithoutId, OptionBase } from '../../../../redux/slicers/type'
import { useQueryOptionsData } from '../../../../apiHooks/useQueryOptionsData'
import { queryKeys } from '../../../../const/queryKeys'

export function ContractOptions({
  onChange,
  value,
}: {
  onChange: React.Dispatch<React.SetStateAction<EmployeeWithoutId>>
  value: string | null
}) {
  const { contract } = queryKeys.options
  const { data: contractData } = useQueryOptionsData<OptionBase[]>(contract)

  //reduxのcontractの配列を取得
  return (
    <ShowOptions
      labelName={'契約形態'}
      id={'contract_id'}
      optionItem={contractData}
      onChange={onChange}
      value={value}
    />
  )
}
