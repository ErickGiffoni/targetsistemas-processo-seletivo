#include <stdio.h>
#include <string.h>

void inverterString(char str[])
{
   int length = strlen(str); // Tamanho da string
   int i, j;
   char temp;

   // Inverte a string manualmente
   for (i = 0, j = length - 1; i < j; i++, j--)
   {
      temp = str[i];
      str[i] = str[j];
      str[j] = temp;
   }
}

int main()
{
   char str[100]; // Buffer para armazenar a string

   printf("Digite uma string: ");
   fgets(str, sizeof(str), stdin);

   // Remove o caractere de nova linha (\n) adicionado pelo fgets
   str[strcspn(str, "\n")] = '\0';

   inverterString(str);

   printf("String invertida: %s\n", str);

   return 0;
}
