function solution(id_list, report, k) {
  let report_num = Array(id_list.length).fill(0);
  let report_set = new Set(report);
  let report_id = Array.from(Array(id_list.length), () => new Array());
  var answer = Array(id_list.length).fill(0);
  report_set.forEach(r => {
    report_num[id_list.indexOf(r.split(' ')[1])] = report_num[id_list.indexOf(r.split(' ')[1])] + 1 || 1; 
    report_id[id_list.indexOf(r.split(' ')[0])].push(r.split(' ')[1])
    console.log(id_list.indexOf(r.split(' ')[0]));
  });
  console.log(report_id);
  report_num.forEach((num, index) => {
    if(num >= k){
      report_id.forEach((id,i) => {
        if(id.indexOf(id_list[index]) != -1){
          answer[i] = answer[i] + 1 || 1;
        }
      })
    }
  })
  console.log(answer);
  return answer;
}

solution(["muzi", "frodo", "apeach", "neo"], ["muzi frodo", "apeach frodo", "frodo neo", "muzi neo", "apeach muzi"], 2);
solution(	["con", "ryan"], ["ryan con", "ryan con", "ryan con", "ryan con"], 3)