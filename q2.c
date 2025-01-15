#include <stdio.h>

// Função para verificar se um número pertence à sequência de Fibonacci
int isFibonacci(int number)
{
   int a = 0, b = 1, next = 0;
   if (number == 0 || number == 1)
      return 1; // 0 e 1 estão na sequência

   while (next < number)
   {
      next = a + b;
      a = b;
      b = next;
      if (next == number)
         return 1; // Número encontrado na sequência
   }
   return 0; // Número não pertence à sequência
}

int main()
{
   int number;

   printf("Digite um número: ");
   scanf("%d", &number);

   if (isFibonacci(number))
   {
      printf("O número %d pertence à sequência de Fibonacci.\n", number);
   }
   else
   {
      printf("O número %d NÃO pertence à sequência de Fibonacci.\n", number);
   }

   return 0;
}
