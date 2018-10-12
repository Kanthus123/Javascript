
//Controle de Gastos
var budgetController = (function() {

    var Expense = function(id, description, value){
      this.id = id;
      this.description = description;
      this.value = value;
      this.percentage = -1;
    };

    Expense.prototype.calcPercentage = function(totalIncome) {
        if (totalIncome > 0) {
            this.percentage = Math.round((this.value / totalIncome) * 100);
        } else {
            this.percentage = -1;
        }
    };

    Expense.prototype.getPercentage = function() {
        return this.percentage;
    };

    var Income = function(id, description, value){
      this.id = id;
      this.description = description;
      this.value = value;
    };

    var calculateTotal = function(type){

      var sum = 0;
      data.allItems[type].forEach(function(current){

        sum += current.value;

      });
      data.totals[type] = sum;
    };

    var data = {
        allItems: {
            exp: [],
            inc: []
          },
          totals: {
            exp: 0,
            inc: 0
          },
          budget: 0,
          percentage: -1
      };

    return {
        addItem: function(type, des, val) {
          var newItem, ID;

          //Cria um novo ID
          if (data.allItems[type].length > 0) {
                ID = data.allItems[type][data.allItems[type].length - 1].id + 1;
            } else {
                ID = 0;
            }

          //Cria um novo item baseado em 'inc' (income) ou 'exp' (Expense)
          if (type === 'exp'){
              newItem = new Expense(ID, des, val);
          } else if (type === 'inc'){
              newItem = new Income(ID, des, val);
          }

          data.allItems[type].push(newItem);

          //retorna o novo elemento
          return newItem;
        },

        deleteItem: function(type, id) {
            var ids, index;

            ids = data.allItems[type].map(function(current) {
                return current.id;
            });

            index = ids.indexOf(id);

            if (index !== -1) {
                data.allItems[type].splice(index, 1);
            }

        },

        calculateBudget: function(){

          //Calcula o total de Ganhos e Gastos
          calculateTotal('exp');
          calculateTotal('inc');

          //Calcula o orçamento: Ganhos - Gastos
          data.budget = data.totals.inc - data.totals.exp;

          //Calcula a porcentagem de Ganhos que foram gastos
          if (data.totals.inc > 0){
          data.percentage = Math.round((data.totals.exp / data.totals.inc) * 100);
        } else {
          data.percentage = -1;
        }
      },

      calculatePercentages: function() {

          data.allItems.exp.forEach(function(cur) {
             cur.calcPercentage(data.totals.inc);
          });
      },

      getPercentages: function() {
          var allPerc = data.allItems.exp.map(function(cur) {
              return cur.getPercentage();
          });
          return allPerc;
      },

        getBudget: function(){
            return {
                budget: data.budget,
                totalInc: data.totals.inc,
                totalExp: data.totals.exp,
                percentage: data.percentage
            };
        },

      testing: function(){
          console.log(data);
      }
    };

})();

//Controle de Interface
var UIController = (function(){

    var DOMstrings = {
        inputType: '.add__type',
        inputDescription: '.add__description',
        inputValue: '.add__value',
        inputButton: '.add__btn',
        incomeContainer: '.income__list',
        expensesContainer: '.expenses__list',
        budgetLabel: '.budget__value',
        incomeLabel: '.budget__income--value',
        expensesLabel: '.budget__expenses--value',
        percentageLabel: '.budget__expenses--percentage',
        container: '.container',
        expensesPercLabel: '.item__percentage',
        dateLabel: '.budget__title--month'
      };

      // função alterada para usar RexExp (Regular Expression)
      var formatNumber = function(num, type) {
        num = Math.abs(num).toFixed(2);
        num = num.replace(/\B(?=(\d{3})+(?!\d))/g, ","); //Isso é uma Regular Expression
        return type === 'inc' ? '+ ' + num : '- ' + num;
    };

    var nodeListForEach = function(list, callback){

      for (var i = 0; i < list.length; i++){
        callback(list[i], i);
      }
    };

    return {
      getInput: function(){
        return {
        type: document.querySelector(DOMstrings.inputType).value, // Sera inc ou exp
        description: document.querySelector(DOMstrings.inputDescription).value,
        value: parseFloat(document.querySelector(DOMstrings.inputValue).value)
        };
      },

      addListItem: function(obj, type){
        var html, newHtml, element;

        //Criar codigo HTML com um Placeholder
        if (type === 'inc'){
          element = DOMstrings.incomeContainer;
          html = '<div class="item clearfix" id="inc-%id%"> <div class="item__description">%description%</div><div class="right clearfix"><div class="item__value">%value%</div><div class="item__delete"><button class="item__delete--btn"><i class="ion-ios-close-outline"></i></button></div></div></div>';
        } else if (type === 'exp') {
          element = DOMstrings.expensesContainer;
          html = '<div class="item clearfix" id="exp-%id%"> <div class="item__description">%description%</div><div class="right clearfix"><div class="item__value">%value%</div><div class="item__percentage">21%</div><div class="item__delete"><button class="item__delete--btn"><i class="ion-ios-close-outline"></i></button></div></div></div>';
        }
        //Trocar o texto do Placeholder por uma data existente

        newHtml = html.replace('%id%', obj.id);
        newHtml = newHtml.replace('%description%', obj.description);
        newHtml = newHtml.replace('%value%', formatNumber(obj.value, type));

        //Inserir HTML no DOM
        document.querySelector(element).insertAdjacentHTML('beforeend', newHtml);
      },

      deleteListItem: function(selectorID) {

              var el = document.getElementById(selectorID);
              el.parentNode.removeChild(el);

          },

      clearFields: function(){
        var fields, fieldsArr;

        //Limpa o campo de Valor e de Descrição
        fields = document.querySelectorAll(DOMstrings.inputDescription + ',' + DOMstrings.inputValue);

        //Transforma a Lista de Fields em um Array de Fields (Util caso fosse necessario limpar varios campos)
        fieldsArr = Array.prototype.slice.call(fields);

        //Limpa todos os campos ate não ter mais onde limpar
        fieldsArr.forEach(function(current, index, array){
            current.value = "";
        });

        //Retorna o Foco para o campo de Descrição
        fieldsArr[0].focus();
      },

      displayBudget: function(obj) {
        var type;
        obj.budget > 0 ? type = 'inc' : type = 'exp';

        document.querySelector(DOMstrings.budgetLabel).textContent = formatNumber(obj.budget, type);
        document.querySelector(DOMstrings.incomeLabel).textContent = formatNumber(obj.totalInc, 'inc');
        document.querySelector(DOMstrings.expensesLabel).textContent = formatNumber(obj.totalExp, 'exp');

        if(obj. percentage >= 0 ){
          document.querySelector(DOMstrings.percentageLabel).textContent = obj.percentage + '%';
        } else {
          document.querySelector(DOMstrings.percentageLabel).textContent = '---';
        }
      },

      displayPercentages: function(percentages){

        var fields = document.querySelectorAll(DOMstrings.expensesPercLabel);

        nodeListForEach(fields, function(current, index){

            if(percentages[index] > 0){
              current.textContent = percentages[index] + '%';
            } else {
              current.textContent = '---';
            }

        });
      },

      displayDate: function(){
        var now, ano, mes, meses;
        now = new Date();

        meses = ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio' , 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'];
        mes = now.getMonth();

        ano = now.getFullYear();
        document.querySelector(DOMstrings.dateLabel).textContent = meses[mes] + ' ' + ano;

      },

      changedType: function(){

        var fields = document.querySelectorAll(
            DOMstrings.inputType + ',' + DOMstrings.inputDescription + ',' + DOMstrings.inputValue
        );

        nodeListForEach(fields, function(cur){
          cur.classList.toggle('red-focus');
        });

        document.querySelector(DOMstrings.inputButton).classList.toggle('red');

      },

      getDOMstrings: function(){
        return DOMstrings;
      }
    };

})();

//Controle Global
var controller = (function(budgetCtrl, UICtrl){

  var setupEventListeners = function() {
    var DOM = UICtrl.getDOMstrings();

    document.querySelector(DOM.inputButton).addEventListener('click', ctrlAddItem);

    document.addEventListener('keypress', function(event){

      if(event.keyCode === 13 || event.which === 13) {
        ctrlAddItem();
      }
    });

    document.querySelector(DOM.container).addEventListener('click', ctrlDeleteItem);

    document.querySelector(DOM.inputType).addEventListener('change', UICtrl.changedType);

  };

  var updateBudget = function(){

    //1 - Calcular o Orçamento
    budgetCtrl.calculateBudget();

    //2 - Retorna o Orçamento
    var budget = budgetCtrl.getBudget();

    //3 - Mostar gastos totais
    UICtrl.displayBudget(budget);
  };

  var updatePercentages = function() {

    //1 Calcular Porcentagens
    budgetCtrl.calculatePercentages();

    //2 Ler porcentagens do Budget Controller
    var percentages = budgetCtrl.getPercentages();

    //3 - Atualizar a UI com as novas porcentagens
    UICtrl.displayPercentages(percentages);

  };


  var ctrlAddItem = function(){
    var input, newItem;

    //1 - get input data
    input = UICtrl.getInput();

    if (input.description !== "" && !isNaN(input.value) && input.value > 0 ){
    //2 - Adicionar item ao controle de gastos
    newItem = budgetCtrl.addItem(input.type, input.description, input.value);

    //3 - Adicionar item a UI
    UICtrl.addListItem(newItem, input.type);

    //4 Limpar os Campos
    UICtrl.clearFields();

    //5 - Calcular e Atualizar Orçamento
    updateBudget();

    //6 - Calcular e atualizar Porcentagens
    updatePercentages();

    }
  };

  var ctrlDeleteItem = function(event) {
        var itemID, splitID, type, ID;

        itemID = event.target.parentNode.parentNode.parentNode.parentNode.id;

        if (itemID) {

            //inc-1
            splitID = itemID.split('-');
            type = splitID[0];
            ID = parseInt(splitID[1]);

        //1 - Deletar um item da Estrutura da data
        budgetCtrl.deleteItem(type, ID);

        //2 - Deletar um item da UI
        UICtrl.deleteListItem(itemID);

        //3 - Atualizar e mostrar o novo orçamento
        updateBudget();

        //4 - Calcular e atualizar Porcentagens
        updatePercentages();

    }
  };

  return {
    init: function(){
      console.log('O program foi iniciado.');
      UICtrl.displayDate();
      UICtrl.displayBudget({
          budget: 0,
          totalInc: 0,
          totalExp: 0,
          percentage: -1
      });
      setupEventListeners();
    }
  };

})(budgetController, UIController);

controller.init();
