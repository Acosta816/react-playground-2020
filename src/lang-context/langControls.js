import React from 'react'
import LanguageContext from './LanguageContext';

export default function LangControls(props) {

  return (
   
    <LanguageContext.Consumer>
		{(value)=> {
			return(
				<div>
					<button disabled={value.lang === 'en-GB'} onClick={()=> {props.handleSetState('en-GB')}} >
						British{' '}
						<span role='img' aria-label='en-GB'>🇬🇧</span>
					</button>
					{' '}
					<button disabled={value.lang === 'en-US'} onClick={()=> {props.handleSetState('en-US')}} >
						American{' '}
						<span role='img' aria-label='en-US'>🇺🇸</span>
					</button>
					{' '}
					<button disabled={value.lang === 'ko'} onClick={()=> {props.handleSetState('ko')}} >
						Korean{' '}
						<span role='img' aria-label='ko'>🇰🇷</span>
					</button>
				</div>
			)
		}}
	</LanguageContext.Consumer>

  )
}
