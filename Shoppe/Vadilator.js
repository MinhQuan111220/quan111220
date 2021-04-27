function Vadilator(options){
   var formElement = document.querySelector(options.form)
   var selectorRules={}
   function getParent(element,selector){
       while(element.parentElement){
           if(element.parentElement.matches(selector)){
               return element.parentElement
           }
           element = element.parentElement
       }
   }
   function validate(inputelement,rule){
       var errorElement = getParent(inputelement,options.formGroupSelector).querySelector(options.errorSelector)

       var errorMesage
        // Lay ra cac rules cua selelec tor
        var rules= selectorRules[rule.selector]
        for(var i=0;i<rules.length;i++){
            switch(inputelement.type){
                case 'radio':
                case 'checkbox':
                    errorMesage = rules[i](
                        formElement.querySelector(rule.selector + ':checked')
                    )
                    break
                default:
                    errorMesage = rules[i](inputelement.value)
            }
           
            if(errorMesage) break
        }
        if(errorMesage){
            errorElement.innerText = errorMesage
            getParent(inputelement,options.formGroupSelector).classList.add('invalid')
         }
        else{
            errorElement.innerText= ''
            getParent(inputelement,options.formGroupSelector).classList.remove('invalid')
        }
        return !errorMesage
   }




    if(formElement){
        formElement.onsubmit= function(e){
            e.preventDefault()

            var isFromValid= true;
            options.rules.forEach(function(rule){
                var inputelement= formElement.querySelector(rule.selector)
                var isValid = validate(inputelement,rule)
                if(!isValid){
                    isFromValid=false
                }
            })
            if(isFromValid){
                if(typeof options.onSubmit === 'function'){
                    var formInputs = formElement.querySelectorAll('[name]')
                    var formValues = Array.from(formInputs).reduce(function(values,input){
                        switch (input.type){
                            case 'radio':
                                values[input.name]=formElement.querySelector('input[name="' + input.name + '"]:checked'.value)
                                break
                            case 'checkbox':
                                if(input.matches(':checkbox')){
                                    values[input.name]=''
                                    return values
                                }
                                if(!Array.isArray(values[input.name])){
                                    values[input.name]=[]
                                }
                                values[input.name].push()
                                break
                            case 'file':
                                values[input.name]=input.files
                                break
                            default:
                                values[input.name]= input.value
                        }
                            
                            return values
                    },{})
                    options.onSubmit(formValues)
                }
                // truong hop submit vs hanh vi mac dinh
                else{
                    formElement.submit()
                }
            }
        }
        options.rules.forEach(function(rule){
            // Luu lai cac rule
            if(Array.isArray(selectorRules[rule.selector])){
                selectorRules[rule.selector].push(rule.test)
            }else{
                selectorRules[rule.selector]=[rule.test]
            }
            var inputelements= formElement.querySelectorAll(rule.selector)
            Array.from(inputelements).forEach(inputelement=>{
                if(inputelement){
                    inputelement.onblur=function(){
                        validate(inputelement,rule)

                    }
                    // khi go vao
                    inputelement.oninput = function(){
                        var errorElement = getParent(inputelement,options.formGroupSelector).querySelector(options.errorSelector)
                        errorElement.innerHTML= ''

                        getParent(inputelement,options.formGroupSelector).classList.remove('invalid')
                    }
                }
            })
            
        })
        
    }
    console.log(options.form)
}


Vadilator.isRequired = function(selector){
    return{
    selector : selector,
    test: function(values){
        return values ? undefined: 'Vui lòng nhập trường này'
    }
    }
}
Vadilator.isEmail = function(selector){
    return{
    selector : selector,
    test: function(values){
        var regex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
        return regex.test(values) ? undefined: 'Trường này là email'
    }
    }
}
Vadilator.minLength = function(selector,min){
    return{
    selector : selector,
    test: function(values){
        return values.length>=min ? undefined: ` Mật khẩu tối thiểu ${min} ký tự`
    }
    }
}
Vadilator.pass = function(selector,getpass,message){
    return {
       selector: selector,
       test: function(value){
           return value===getpass() ? undefined : message || 'Mat khau nhap lai khong chinh xac'
       }
   }
}