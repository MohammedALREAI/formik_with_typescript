import Select, { ActionMeta, SingleValue, components } from 'react-select'
import { TOptions } from '../../utils/listCont'
import { ErrorSection } from './ErrorSection'
import { AiOutlineCaretDown } from 'react-icons/ai'
import { FormikErrors, FormikTouched } from 'formik'




interface Props {
    name: string;
    options:TOptions,
    onChange: ((newValue: SingleValue<string>, actionMeta: ActionMeta<string>) => void) | any;
    defaultValue?: string | undefined;
    inputValue?: string;
    value: string ;
    placeholder?: string;
    errors?: FormikErrors<any> | string ;
    touched?:FormikTouched<any> | boolean,
    onFocus?:any
}




const customStyles = {
    option: (provided: any) => ({
      ...provided,
      borderBottom: '1px solid #DDD',
      padding: 10,
      backgroundColor: 'theme.background',
      width: '100%',
      boxShadow: 'none',
    }),
    singleValue: (provided: any) => ({
      ...provided,
    }),
    menuList: (provided: any) => ({
      ...provided,
      padding: 0,
      borderRadius: 5,
      boxShadow: 'none',
    }),
    menu: (provided: any) => ({
      ...provided,
      borderRadius: 5,
      hyphens: 'auto',
      width: 200,
      marginTop: 15,
      textAlign: 'left',
      boxShadow: '4px 4px 18px 0 #e4146e26',
    }),
    valueContainer: (provided: any) => ({
      ...provided,
      overflow: 'unset',
      padding: '0px',
    }),
    container: (provided: any) => ({
      ...provided,
      display: 'inline-block',
      border: 'none !important',
    }),
    control: (provided: any) => ({
      ...provided,
      height: 32,
      textAlign: 'left',
      cursor: 'pointer',
      margin: 'auto',
      backgroundColor: 'transparent',
    }),
    dropdownIndicator: (provided: any) => ({
      ...provided,
      display: 'flex',
    }),
    indicatorSeparator: (provided: any) => ({
      ...provided,
      display: 'flex-end',
    }),
  }
export const SelectReact = (props: Props) => {
    const { options, value, onChange } = props

    const defaultValue = (options:TOptions, value:string) => {
        return options ? options.find(option => option.value === value) : ''
    }



const CaretDownIcon = () => {
    return <div className='flex space-x-2 items-center'><AiOutlineCaretDown/> <span className='text-red-600 pt-1'>*</span></div>
  }

  const DropdownIndicator = (props:any) => {
    return (
      <components.DropdownIndicator {...props}>
        <CaretDownIcon />
      </components.DropdownIndicator>
    )
  }

    return (
        <div className="container  mx-auto my-4">
            <Select
                    closeMenuOnSelect={false}

                className="basic-single"
                isSearchable={true}
                name={props.name}
                // styles={customStyles}
                classNamePrefix="react-select"
                placeholder={props.placeholder}
                value={defaultValue(options, value)}
                onFocus={props.onFocus}
                options={options}
                components={{ DropdownIndicator }}
                onChange={onChange}
            />
                       <ErrorSection errors={props.errors} touched={props.touched} />
        </div>
    )
}
