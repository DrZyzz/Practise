//import java.awt.*;
//import java.util.*;
//import java.util.List;
//
public class Main {
    public static void main(String[] args) {
        System.out.println(5/2);
        System.out.println(encryptThis("A wise old owl lived in an oak"));
    }
//      int highestScore = 0;
//      String highestScoredWord = "";
//      for(int i = 0 ; i<wordsSeperated.length; i++){
//          int sum = 0;
//          for(int j = 0; j<wordsSeperated[i].length(); j++){
//              sum += wordsSeperated[i].charAt(j) - 'a' + 1;
//          }
//          if(sum > highestScore){
//              highestScore = sum;
//              highestScoredWord = wordsSeperated[i];
//          }
//      }
//        // Your code here...
//        return highestScoredWord;
//    }
////
//    public static int findEvenIndex(int[] arr) {
//        for(int i =0; i< arr.length; i++){
//            int leftSum = 0;
//            int rightSum = 0;
//            for(int j = 0; j < i; j++){
//                leftSum += arr[j];
//            }
//            for(int j = i + 1; j < arr.length; j++){
//                rightSum += arr[j];
//            }
//            if (rightSum == leftSum) {
//                return i;
//            }
//        }
//        return -1;
//
//
//        // your code
//    }
//
//    public static int countBits(int n){
//        int count = 0;
//        while(n>0){
//            int remainder = n % 2;
//            if(remainder==1){
//                count++;
//            }
//            n /= 2;
//        }
//        return count;
//        // Show me the code!
//    }
//
//    public static String order(String words) {
//        if(words == ""){
//            return "";
//        }
//        StringBuilder changedOrder = new StringBuilder();
//        String[] wordsSeperated = words.split(" ");
//        String[] reordered = new String[wordsSeperated.length];
//        for(int i = 0; i<wordsSeperated.length; i++){
//            int index = extract(wordsSeperated[i]);
//            reordered[index-1] = wordsSeperated[i];
//        }
//        for(String a : reordered){
//            changedOrder.append(a).append(" ");
//        }
//        String.join(" ", reordered);
//
//        return changedOrder.toString().trim();
//        // ...
//    }
//    public static int extract(String str){
//        for(int i =0; i<str.length(); i ++){
//            char c = str.charAt(i);
//            if(c >='1' && c <='9'){
//                return c - '0';
//            }
//        }
//        return 0;
//    }
//
//    public static String getMiddle(String word) {
//        StringBuilder middleLetters = new StringBuilder();
//        if(word.length()%2 == 0) {
//            middleLetters.append(word.charAt(word.length()/2 - 1));
//            middleLetters.append(word.charAt(word.length()/2 ));
//        }else if(word.length()%2 != 0) {
//            middleLetters.append(word.charAt(word.length()/2));
//        }
//            return middleLetters.toString();
//        //Code goes here!
//    }
//
//    public static String disemvowel(String str) {
//        String vowels = "aeiouAEIOU";
//        StringBuilder witoutWovels = new StringBuilder();
//        for(int i=0; i<str.length();i++){
//            char c = str.charAt(i);
//            if(vowels.indexOf(c) == -1){
//                witoutWovels.append(c);
//            }
//        }
//        return witoutWovels.toString();
//        // Code away...
//    }
//
//    public static int[] countPositivesSumNegatives(int[] input) {
//        if (input == null || input.length == 0) {
//            return new int[] {};
//        }
//
//        int countPositive = 0;
//        int sumNegative = 0;
//
//        for (int i = 0; i < input.length; i++) {
//            if (input[i] > 0) {
//                countPositive++;
//            } else {
//                sumNegative += input[i];
//            }
//        }
//
//        return new int[] {countPositive, sumNegative};
//    }
//
//
//    public static String longestConsec(String[] strarr, int k) {
//        if(k <= 0){
//            return "";
//        }
//        if(strarr.length< k){
//            return "";
//        }
//        List<String> newList = new ArrayList<>();
//        for(int i=0; i< strarr.length - k + 1 ; i++){
//           String result = "";
//           for(int j = i; j < i+k; j++){
//            result += strarr[j];
//           }
//           newList.add(result);
//       }
//        String longest = newList.get(0);
//       for(int i = 1; i< newList.size(); i++){
//           if(newList.get(i).length() > longest.length()){
//               longest = newList.get(i);
//           }
//       }
//
//       return longest;
//        // your code
//    }
//
//    public static int persistence(long n) {
//        if(n < 10){
//            return 0;
//        }
//        List<Long> digits = new ArrayList<>();
//        long multiplication = 1;
//        while(n>0){
//            long remainder = (n % 10);
//            digits.add(remainder);
//            n /= 10;
//        }
//        for(int i = 0; i<digits.size(); i++){
//            multiplication *= digits.get(i);
//        }
//
//        return persistence(multiplication) + 1;
//
//        // your code
//    }
//
//    public static int arithmetic(int a, int b, String operator) {
//
//        switch (operator){
//            case "add": return a+b;
//            case "subtract": return a-b;
//            case "multiply": return a*b;
//            case "divide": return  a/b;
//            default: return 0;
//        }
//
//        // your code here
//    }
//
//    public static String[] towerBuilder(int nFloors)
//    {
//        int maxSize = nFloors*2 -1;
//        String[] tower = new String[nFloors];
//        for(int i =0; i<tower.length; i++){
//            int currentSize = 2*(i+1) -1;
//            String stars = "";
//            String oneSpacesHalf = "";
//            for(int j = 0; j<currentSize; j++){
//                stars+="*";
//            }
//            for (int j = 0; j<(maxSize-currentSize)/2;j++){
//                oneSpacesHalf+=" ";
//            }
//            String result = oneSpacesHalf+stars+oneSpacesHalf;
//            tower[i] = result;
//
//        }
//
//        return tower;
//    }
//
//    public static String[] wave(String str) {
//        List<String> mexicanWave = new ArrayList<>();
//        for(int i = 0; i<str.length(); i++){
//            if(str.charAt(i) == ' '){
//                continue;
//            }
//            if(i==0){
//                mexicanWave.add(str.substring(i, i+1).toUpperCase() + str.substring(i+1));
//            }
//            else {
//                mexicanWave.add(str.substring(0, i) +str.substring(i, i+1).toUpperCase() + str.substring(i+1)) ;
//            }
//
//        }
//
//        // Your code here
//        return mexicanWave.toArray(new String[0]);
//    }
//
//
//    public static long digPow(int n, int p) {
//        long bigNumber = 0;
//        long littleNumber = n;
//        List<Long> digits = new ArrayList<>();
//        while (n > 0){
//            long digit = n % 10;
//            digits.add(digit);
//            n /= 10;
//        }
//        for(long i = 0; i < digits.size(); i++){
//            bigNumber += Math.pow(digits.get((int) i), p - i + digits.size() - 1);
//        }
//        long number = 1;
//        while (number * littleNumber <= bigNumber){
//            if(number * littleNumber == bigNumber) return number;
//            number++;
//        }
//        return -1;
//    }
//
//
//
//
//
//
//    public static String incrementString(String str) {
//        Pattern regex = Pattern.compile("([a-z0]+)(\\d*)");
//        Matcher m = regex.matcher(str);
//        if(m.matches()){
//            String group1 = m.group(1);
//            String group2 = m.group(2);
//            int number;
//            if (group2.isEmpty()) {
//                number = 1;
//            } else {
//                number = Integer.parseInt(group2) + 1;
//            }
//            return group1 + number;
//        }
//        return str;
//    }
//
//
//    public static List<Long> sumDigPow(long a, long b) {
//        List<Long> eurekaNumbers = new ArrayList<>();
//
//    for(long i = a; i <= b; i++){
//        while(i < 10){
//            eurekaNumbers.add(i);
//            i++;
//        }
//        List<Long> digits = new ArrayList<>();
//        long num =i;
//        long sum = 0;
//        while(num > 0){
//            long digit =(num % 10);
//            digits.add(digit);
//            num /= 10;
//        }
//        for(long y =0; y < digits.size(); y++){
//            sum += Math.pow(digits.get((int) y), digits.size() -y);
//        }
//        if (sum == i) eurekaNumbers.add(i);
//    }
//        // your code
//        return eurekaNumbers;
//    }
//
//    public static List<Object> filterList(final List<Object> list) {
//        List<Object> numbersList = new ArrayList<>();
//        for (Object o : list) if (o instanceof Integer) numbersList.add(o);
//        // Return the List with the Strings filtered out
//        return numbersList;
//    }
//
//    public static boolean scramble(String str1, String str2) {
//        int[] firstArray = new int[26];
//        int[] secondArray = new int[26];
//        for(int i = 0; i <str1.length(); i++){
//            firstArray[str1.charAt(i) - 'a'] ++;
//        }
//        for(int i = 0; i <str2.length(); i++){
//            secondArray[str2.charAt(i) - 'a'] ++;
//        }
//        for (int i = 0; i < firstArray.length; i++){
//            if(firstArray[i] < secondArray[i]){
//                return false;
//            }
//        }
//        return true;
//    }
//
//        public static String highAndLow(String numbers) {
//            String[] array = numbers.split(" ");
//            int min = Integer.MAX_VALUE;
//            int max = Integer.MIN_VALUE;
//            for (int i=0; i< array.length; i++){
//                int value = Integer.parseInt(array[i]);
//                if (value < min) min = value;
//                if (value > max) max = value;
//            }
//            return String.format("%d %d", max, min);
//        }
//
//
//
//    public static String whoLikesIt(String... names) {
//        switch (names.length) {
//            case 0: return "no one likes this";
//            case 1: return String.format("%s likes this", names[0]);
//            case 2: return String.format("%s and %s like this", names[0], names[1]);
//            case 3: return String.format("%s, %s and %s like this", names[0], names[1], names[2]);
//            default: return String.format("%s, %s and %d others like this", names[0], names[1], names.length - 2);
//        }
//        //Do your magic here
//    }
//
//    public static int calculateYears(double principal, double interest, double tax, double desired) {
//        int years = 0;
//        while (principal < desired) {
//            principal += principal * interest * (1 - tax);
//            years++;
//        }
//        return years;
//    }
//
//    public static String reverseWords(String str) {
//        String[] words = str.split(" ");
//        StringBuilder result = new StringBuilder();
//        for (String word : words) {
//            result.append(new StringBuilder(word).reverse()).append(" ");
//        }
//        return result.toString().trim();
//    }
//
//    public static boolean check(String sentence){
//        boolean[] count = new boolean[26];
//        sentence = sentence.toLowerCase();
//        for(int i = 0; i < sentence.length(); i++){
//            if(Character.isLetter(sentence.charAt(i))){
//            int index = sentence.charAt(i) - 97;
//            count[index] = true;
//            }
//        }
//        for(boolean i : count){
//            if(!i){
//                return false;
//            }
//        }
//        return true;
//        //code
//    }
//
//    public static int findMinNum(int num) {
//        for(int i = 1; true; i ++){
//        if(getDivisorsCount(i) == num){
//            return i;
//        }
//        }
//        // your code
//    }
//    public static int getDivisorsCount(int num) {
//        int count = 0;
//
//        for (int i = 1; i <= Math.sqrt(num); i++) {
//            if (num % i == 0) {
//                count++;
//            }
//        }
//        return count;
//    }
//
//    public static int[] twoSum(int[] numbers, int target) {
//        for(int i = 0; i< numbers.length; i++){
//            for(int j = 1; j < numbers.length; j++){
//                if(numbers[i] + numbers[j] == target){
//                    return new int[] {i,j};
//                }
//            }
//        }
//        return null; // Do your magic!
//    }
//
//    public static boolean comp(int[] a, int[] b) {
//
//        outerLoop:
//        for(int x : a){
//            for(int y : b){
//                if(x*x == y){
//                    continue outerLoop;
//                }
//            }
//            return false;
//        }
//        return true;
//    }
//
//    public static int findIt(int[] a) {
//        HashMap<Integer, Integer> counter = new HashMap<>();
//        for(int i : a){
//            if(counter.containsKey(i)){
//                int repTimes = counter.get(i);
//                counter.put(i, repTimes + 1);
//            }else {
//                counter.put(i, 1);
//            }
//        }
//        System.out.println(counter);
//        for (Integer key : counter.keySet()){
//            if(counter.get(key) % 2 != 0){
//                return key;
//            }
//        }
//        return 0;
//    }
//
//    static String toCamelCase(String s){
//        String[] parts = s.split("[-_]");
//        StringBuilder camelCased = new StringBuilder(parts[0]);
//        for(int i = 1; i<parts.length; i++){
//            String cap = parts[i].substring(0,1).toUpperCase() + parts[i].substring(1);
//            camelCased.append(cap);
//        }
//        return camelCased.toString();
//    }
//
//
//    }
//
