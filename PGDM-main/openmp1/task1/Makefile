task1: task1.o
	gcc -o task1 task1.o -lgomp
	
task1.o: task1.c
	gcc -g -c task1.c -O2 -fopenmp
		
clean:
	rm -f task1
	rm *.o

stat:
	mpstat -P ALL 1

affinity:
	export GOMP_CPU_AFFINITY="2 3"

no_affinity:
	unset GOMP_CPU_AFFINITY


# GOMP_CPU_AFFINITY="3 1 2,4 5-6 7-13:2″
# 第1個thread給core3作
# 第2個thread給core1作
# "2,4″代表第3個thread分給core2，第4個thread分給core4作
# "5-6″設定core範圍，代表第5個分給core5，第6個分給core6
# "7-13:2″設定core7~13每次遞增2個去執行，第7個thread給core7，第8個給core9，第9個給core11….
# 也可以只設一個