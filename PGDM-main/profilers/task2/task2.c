/* ============================================================	*/
/* =							      = */
/* =	 NUMERICAL AND DATA-INTENSIVE COMPUTING (PART I)      = */
/* =							      = */
/* =		Miguel Angel Garcia (September 2012)	      = */
/* =							      = */
/* ============================================================	*/

#include <time.h>
#include <stdio.h>
#include <stdlib.h>

#define N 1000
#define BLOCK 8

char A[N][N], B[N][N];
int C1[N][N], C2[N][N];

void Ini()
{
	int i, j;

	for (i = 0; i < N; i++)
		for (j = 0; j < N; j++)
		{
			A[i][j] = rand();
			B[i][j] = rand();
		}
}

void Mul1(char A[N][N], char B[N][N], int C[N][N])
{
	int i, j, k;

	for (i = 0; i < N; i++)
		for (j = 0; j < N; j++)
		{
			for (k = 0; k < N; k++)
				C[i][j] += A[i][k] * B[k][j];
		}
}

void Mul2(char A[N][N], char B[N][N], int C[N][N])
{
	int i, j, k;

	for (i = 0; i < N; i++)
	{
		for (k = 0; k < N; k++)
		{

			for (j = 0; j < N; j++)
			{
				C[i][j] += A[i][k] * B[k][j];
			}
		}
	}
}


void Mul3(char A[N][N], char B[N][N], int C[N][N])
{
	int i, j, k;
	for (k = 0; k < N; k++)
	{
		for (i = 0; i < N; i++)
		{

			for (j = 0; j < N; j++)
			{
				C[i][j] += A[i][k] * B[k][j];
			}
		}
	}
}


void Mul4(char A[N][N], char B[N][N], int C[N][N])
{
	int i, j, k, ii, jj, kk, sum;

	for(i = 0; i < N; i += BLOCK){
		for(j = 0; j < N; j += BLOCK){
			for(k = 0; k < N; k += BLOCK){
				for(ii = i; ii < i + BLOCK && ii < N; ii++){
					for(jj = j; jj < j + BLOCK && jj < N; jj++){
						sum = C[ii][jj];
						for(kk = k; kk < k + BLOCK && kk < N; kk++){
							sum += A[ii][kk] * B[kk][jj];
						}
						C[ii][jj] = sum;
					}
				}
			}
		}
	}
}

char Equal(int c1[N][N], int c2[N][N])
{
	int i, j;

	for (i = 0; i < N; i++)
		for (j = 0; j < N; j++)
			if (c1[i][j] != c2[i][j])
				return 0;

	return 1;
}

void main()
{
	clock_t ini, end;
	int tmp;

	Ini();

	ini = clock();

	Mul2(A, B, C1);

	end = clock();

	//Mul4(A, B, C2);
	//printf("Equal %d \n", Equal(C1, C2));

	printf("CPU = %f ms \n", (float)(end - ini) / CLOCKS_PER_SEC * 1000);
}
